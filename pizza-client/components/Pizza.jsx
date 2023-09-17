"use client";
import PizzaList from "./PizzaList";
import { useState, useEffect } from "react";

const term = "Pizza";

const Pizza = () => {
  const [data, setData] = useState([]);
  const [maxId, setMaxId] = useState(0);

  useEffect(() => {
    const fetchPizzaData = () => {
      // Simulate fetching data from API
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
          id: 3,
          name: "Hawaiian",
          description: "Tomato sauce, mozzarella, ham, and pinapple",
        },
      ];
      setData(pizzaData);
      setMaxId(Math.max(...pizzaData.map((pizza) => pizza.id)));
    };

    fetchPizzaData();
  }, []);

  const handleCreate = (item) => {
    // Simulate creating item on API
    const newItem = { ...item, id: data.length + 1 };
    setData([...data, newItem]);
    setMaxId(maxId + 1);
  };

  const handleUpdate = (item) => {
    // Simulate updating item on API
    const updatedData = data.map((pizza) =>
      pizza.id === item.id ? item : pizza
    );
    setData(updatedData);
  };

  const handleDelete = (id) => {
    // Simulate deleting item on API
    const updatedData = data.filter((pizza) => pizza.id !== id);
    setData(updatedData);
  };

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
