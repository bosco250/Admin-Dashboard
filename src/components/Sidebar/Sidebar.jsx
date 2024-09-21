import { Settings } from "@mui/icons-material";
import { Button } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleRight, FaBell, FaCartArrowDown } from "react-icons/fa";
import { IoMdLogOut, IoMdSettings } from "react-icons/io";
import { MdMessage, MdOutlineProductionQuantityLimits } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";

function Sidebar() {
  const [activetab, setActivetab] = useState(1);
  const [isToggleSubMenu, setIsToggleSubMenu] = useState(false);
  const isOpenSubmenu = (index) => {
    setActivetab(index);
    setIsToggleSubMenu(!isToggleSubMenu);
  };
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/">
            <Button
              className={`${activetab === 1 ? "active" : ""}`}
              onClick={() => isOpenSubmenu(1)}
            >
              <span className="icon">
                <RxDashboard />{" "}
              </span>
              Dashboard
            </Button>
          </Link>
        </li>
        <li>
          <Button
            className={`${activetab === 2 && isToggleSubMenu === true && isToggleSubMenu === true ? "active" : ""}`}
            onClick={() => isOpenSubmenu(2)}
          >
            <span className="icon">
              <MdOutlineProductionQuantityLimits />{" "}
            </span>
            Products
            <span className="arrow">
              {" "}
              <FaAngleRight />{" "}
            </span>
          </Button>
          <div
            className={`submenuWrapper ${
              activetab === 2 && isToggleSubMenu === true
                ? "colapse"
                : "colapsed"
            }`}
          >
            <ul className="submenu">
              <li>
                <Link to="#">Product List</Link>
              </li>
              <li>
                <Link to="#">Product View</Link>
              </li>
              <li>
                <Link to="#">Product Upload</Link>
              </li>
            </ul>
          </div>
        </li>
        <li>
          <Link to="/">
            <Button
              className={`${activetab === 12 && isToggleSubMenu === true ? "active" : ""}`}
              onClick={() => isOpenSubmenu(12)}
            >
              <span className="icon">
                <FaCartArrowDown />{" "}
              </span>
              Orders
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 3 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(3)}>
              <span className="icon">
                <MdMessage />{" "}
              </span>
              Messages
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 4 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(4)}>
              <span className="icon">
                <FaBell />{" "}
              </span>
              Notifications
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 5 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(5)}>
              <span className="icon">
                <IoMdSettings />{" "}
              </span>
              Settings
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 6 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(6)}>
              <span className="icon">
                <MdOutlineProductionQuantityLimits />{" "}
              </span>
              Products
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 7 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(7)}>
              <span className="icon">
                <FaCartArrowDown />{" "}
              </span>
              Orders
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 8 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(8)}>
              <span className="icon">
                <IoMdSettings />{" "}
              </span>
              Messages
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 9 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(9)}>
              <span className="icon">
                <FaBell />{" "}
              </span>
              Notifications
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
        <li>
          <Link to="/">
            <Button className={`${activetab === 10 && isToggleSubMenu === true ? "active" : ""}`} onClick={() => isOpenSubmenu(10)}>
              <span className="icon">
                <IoMdSettings />{" "}
              </span>
              Settings
              <span className="arrow">
                {" "}
                <FaAngleRight />{" "}
              </span>
            </Button>
          </Link>
        </li>
      </ul>

      <div className="logoutWrapper">
       <div className="logoutBox">
        <Button variant="contained"><IoMdLogOut/> Logout</Button>
       </div>
      </div>

    </div>
  );
}

export default Sidebar;
