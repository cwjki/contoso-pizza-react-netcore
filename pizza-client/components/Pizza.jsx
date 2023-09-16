"use client";
import PizzaList from "./PizzaList";
import { useState, useEffect } from "react";

const term = "Pizza";

const Pizza = () => {
  const [data, setData] = useState([]);
  const [maxId, setMaxId] = useState(0);

  useEffect(() => {
    // Simulate fetching data from API
    const fetchPizzaData = () => {
      const pizzaData = [
        {
          id: 1,
          name: "Margherita",
          description: "Tomato sauce, mozzarella, and basil",
        },
        {
          id: 2,
          name: "Pepperoni",
          description: "Tomato sauce, mozzarella, and pepperoni",
        },
        {
          id: 1,
          name: "Hawaiian",
          description: "Tomato sauce, mozzarella, ham, and pinapple",
        },
      ];
      setData(pizzaData);
      setMaxId(Math.max(...pizzaData.map((pizza) => pizza.id)));
    };

    fetchPizzaData();
  }, []);

  const handleCreate = (item) => {};
  const handleUpdate = (item) => {};
  const handleDelete = (id) => {};

  return (
    <>
      <PizzaList
        name={term}
        data={data}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Pizza;
