"use client";
import { useState } from "react";

const PizzaList = ({ name, data, onCreate, onUpdate, onDelete, error }) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    description: "",
  });

  return (
    <div>
      PizzaList
      <h2></h2>
    </div>
  );
};

export default PizzaList;
