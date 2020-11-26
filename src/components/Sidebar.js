import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./Sidebar.css";

const Slidebar = (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/histoire">
        Histoire
      </a>
      <a className="menu-item" href="/carte">
        Cartes
      </a>
      <a className="menu-item" href="/booster">
        Booster
      </a>
    </Menu>
  );
};

export default Slidebar;
