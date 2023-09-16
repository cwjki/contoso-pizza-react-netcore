"use client";
import PizzaList from "./PizzaList";
import { useState, useEffect } from "react";

const term = "Pizza";

const Pizza = () => {
  const [data, setData] = useState([]);
  const [maxId, setMaxId] = useState(0);

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
