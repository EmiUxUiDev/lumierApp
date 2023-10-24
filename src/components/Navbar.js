import React, { useState } from "react";
import "../styles/navbar.css";
import lumierOff from "../img/LumierOff.png";
import lumierOn from "../img/LumierOn.png";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header>
      <nav>
        <div className="wrapper-navbar">
          <div className="wrapper-logo">
            <div className="wrapper-lamp">
              <img
                className="lamp-off"
                src={lumierOff}
                alt="Logo de Lumier apagado, web"
              />
              <Link to="/">
                <img
                  className="lamp-on"
                  src={lumierOn}
                  alt="Logo de Lumier encendido, web"
                />
              </Link>
            </div>
          </div>

          <div
            className={`menu-toggle ${isOpen ? "open" : ""}`}
            onClick={toggleNavbar}
          >
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

          <ul className={`ul-categories ${isOpen ? "open" : ""}`}>
            <li>
              <Link to="/category/colgantes">COLGANTES</Link>
            </li>
            <li>
              <Link to="/category/pared">DE PARED</Link>
            </li>
            <li>
              <Link to="/category/pie">DE PIE</Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
