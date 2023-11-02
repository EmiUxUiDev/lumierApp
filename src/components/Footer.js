import React from "react";
import lumierLogo from "../img/LumierOnLogo.png";
import "../styles/footer.css";
import { Link } from "react-router-dom";
import location from "../icons/location.png";

export default function Footer() {
  return (
    <footer className="wrapper-footer">
      <div className="wrapper-branding">
        <img src={lumierLogo} alt="Logo de lampara de la empresa" />
        <p>Lamparas y luminarias hechas a mano en fibras naturales</p>
      </div>
      <div className="wrapper-category">
        Categoria
        <ul className="wrapper-ul">
          <li className="wrapper-li">
            <Link to="/category/colgantes">COLGANTES</Link>
          </li>
          <li className="wrapper-li">
            <Link to="/category/pared">DE PARED</Link>
          </li>
          <li className="wrapper-li">
            <Link to="/category/pie">DE PIE</Link>
          </li>
        </ul>
      </div>
      <div className="wrapper-contact">
        Punto de entrega
        <div className="wrapper-location">
          <img src={location} alt="Icono de direccion" />
          <p>Viedma 114, Cordoba - AR</p>
        </div>
      </div>
    </footer>
  );
}
