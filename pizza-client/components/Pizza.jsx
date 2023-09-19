"use client";
import PizzaList from "./PizzaList";
import { useState, useEffect } from "react";

const term = "Pizza";
const API_URL = "http://localhost:5075/pizza";
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
    console.log(`add item: ${JSON.stringify(item)}`);
    fetch(API_URL, {
      method: "POST",
      headers: headers,
      body: JSON.stringify({
        name: item.name,
        description: item.description,
      }),
    })
      .then((response) => response.json())
      .then((returnedItem) => setData(...data, returnedItem))
      .catch((error) => setError(error));
  };

  const handleUpdate = (updatedItem) => {
    console.log(`update item: ${JSON.stringify(updatedItem)}`);
    fetch(`${API_URL}/${updatedItem.id}`, {
      method: "PUT",
      headers,
      body: JSON.stringify(updatedItem),
    })
      .then(() =>
        setData(
          data.map((item) => (item.id === updatedItem ? updatedItem : item))
        )
      )
      .catch((error) => setError(error));
  };

  const handleDelete = (id) => {
    fetch(`${API_URL}/${id}`, {
      method: "DELETE",
      headers,
    })
      .then(() => setData(data.filter((item) => item.id !== id)))
      .catch((error) => console.log("Error deleting item:", error));
  };

  return (
    <>
      <PizzaList
        name={term}
        data={data}
        error={error}
        onCreate={handleCreate}
        onUpdate={handleUpdate}
        onDelete={handleDelete}
      />
    </>
  );
};

export default Pizza;
