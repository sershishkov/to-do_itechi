import React from "react";
import { Link } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <div className="Header  bg-dark text-white p-4 ">
      <Link to="/" className="main-link">
        Главная
      </Link>
      <h1> Задачи </h1>
    </div>
  );
};

export default Header;
