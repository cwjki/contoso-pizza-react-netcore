"use client";
import PizzaList from "./PizzaList";
import { useState, useEffect } from "react";

const Pizza = () => {
  const [data, setData] = useState([]);
  const [maxId, setMaxId] = useState(0);

  return (
    <>
      <PizzaList />
    </>
  );
};

export default Pizza;
