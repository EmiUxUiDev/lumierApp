import React from "react";
import "../styles/navbar.css";
import logoLumier from "../img/Lumier360.png";

export default function Navbar() {
  return (
    <header>
      <nav>
        <div className="wrapper-navbar">

          <div className="wrapper-logo">
            <img className="img-logo" src={logoLumier} alt="Logo de Lumier, web" />
            <p className="logo-txt">Ilumina tus ideas!</p>
          </div>

          <ul className="ul-categories">
            <li>
              <a href="">Colgantes</a>
            </li>
            <li>
              <a href="">Pared</a>
            </li>
            <li>
              <a href="">De pie</a>
            </li>
          </ul>

          <div className="wrapper-menu">
            <spam className='bar'></spam>
            <spam className='bar'></spam>
            <spam className='bar'></spam>
          </div>
          
        </div>
      </nav>
    </header>
  );
}
