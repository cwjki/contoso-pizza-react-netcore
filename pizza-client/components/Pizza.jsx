"use client";
import PizzaList from "./PizzaList";
import { useState, useEffect } from "react";

const term = "Pizza";
const API_URL = "/pizzas";
const headers = {
  "Content-Type": "application/json",
};

const Pizza = () => {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPizzaData = () => {
      fetch(API_URL)
        .then((response) => response.json())
        .then((data) => setData(data))
        .catch((error) => setError(error));
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
