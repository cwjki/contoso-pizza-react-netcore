using Microsoft.OpenApi.Models;
using Microsoft.EntityFrameworkCore;
using PizzaStore.Models;

var builder = WebApplication.CreateBuilder(args);

// DB Connection
var connectionString = builder.Configuration.GetConnectionString("Pizzas") ?? "Data Source=Pizzas.db";
builder.Services.AddSqlite<PizzaDb>(connectionString);

builder.Services.AddEndpointsApiExplorer();

// Swagger
builder.Services.AddSwaggerGen(c =>
{
  c.SwaggerDoc("v1", new OpenApiInfo
  {
    Title = "PizzaStore API",
    Description = "Making the Pizzas you love",
    Version = "v1"
  });
});

// CORS
var MyAllowSpecificOrigins = "_myAllowSpecificOrigins";
builder.Services.AddCors(option =>
{
  option.AddPolicy(name: MyAllowSpecificOrigins,
    policy =>
    {
      policy.WithOrigins("http://localhost:3000", "*");
    });
});


var app = builder.Build();
app.UseSwagger();
app.UseSwaggerUI(c =>
{
  c.SwaggerEndpoint("/swagger/v1/swagger.json", "PizzaStore API V1");
});

app.UseCors(MyAllowSpecificOrigins);

app.MapGet("/pizza", async (PizzaDb db) => await db.Pizzas.ToListAsync());

app.MapPost("/pizza", async (PizzaDb db, Pizza pizza) =>
{
  Console.WriteLine(pizza.Id);
  await db.Pizzas.AddAsync(pizza);
  await db.SaveChangesAsync();
  return Results.Created($"/pizza/{pizza.Id}", pizza);
});

app.MapGet("/pizza/{id}", async (PizzaDb db, int id) => await db.Pizzas.FindAsync(id));

app.MapPut("/pizza/{id}", async (PizzaDb db, Pizza updatePizza, int id) =>
{
  var pizza = await db.Pizzas.FindAsync(id);
  if (pizza is null) return Results.NotFound();
  pizza.Name = updatePizza.Name;
  pizza.Description = updatePizza.Description;
  await db.SaveChangesAsync();
  return Results.NoContent();
});

app.MapDelete("/pizza/{id}", async (PizzaDb db, int id) =>
{
  var pizza = await db.Pizzas.FindAsync(id);
  if (pizza is null)
  {
    return Results.NotFound();
  }
  db.Pizzas.Remove(pizza);
  await db.SaveChangesAsync();
  return Results.Ok();
});

app.Run();
