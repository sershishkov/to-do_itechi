import React from "react";

import "./ItemTodo.scss";

const ItemTodo = ({ label, number, text }) => {
  return (
    <span className="ItemTodo">
      <span>
        {label} {number}
      </span>{" "}
      <span>{text}</span>{" "}
    </span>
  );
};

export default ItemTodo;
