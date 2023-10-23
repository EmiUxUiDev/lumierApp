import React, { useState } from "react";
import "../styles/navbar.css";
import lumierOff from "../img/LumierOff.png";
import lumierOn from "../img/LumierOn.png";

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
              <img
                className="lamp-on"
                src={lumierOn}
                alt="Logo de Lumier encendido, web"
              />
            </div>
          </div>

          <div className={`menu-toggle ${isOpen ? 'open' : ''}`} onClick={toggleNavbar}>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </div>

            <ul className={`ul-categories ${isOpen ? 'open' : ''}`}>
              <li>
                <a href="#">COLGANTES</a>
              </li>
              <li>
                <a href="#">DE PARED</a>
              </li>
              <li>
                <a href="#">DE PIE</a>
              </li>
            </ul>
        </div>
      </nav>
    </header>
  );
}
