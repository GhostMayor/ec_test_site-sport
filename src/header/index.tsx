import React from "react";
import Logo from "./logo";
import { Link } from "react-router-dom";
import "./style.scss";

export default function Header() {
  return (
    <header>
      <Logo />
      <ul className="header-products">
        <li>
          <Link to="/products/man">Мужчины</Link>
        </li>
        <li>
          <Link to="/products/woman">Женщины</Link>
        </li>
        <li>
          <Link to="/products/children">Дети</Link>
        </li>
        <li>
          <Link to="/products/collection">Коллекции</Link>
        </li>
      </ul>
    </header>
  );
}
