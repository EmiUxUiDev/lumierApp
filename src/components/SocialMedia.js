import React from "react";
import insta from "../icons/logo-instagram.svg";
import wapp from "../icons/whatsapp-logo-24.png";
import nube from "../icons/nube.png";
import "../styles/socialmedia.css";

export default function SocialMedia() {
  return (
    <>
      <h3 className="social-media-h3">BIenvenidos a LUMIER Deco</h3>
      <section className="wrapper-social-media">
        
        <button className="wapp-btn">
          <img src={wapp} alt="logo whatsapp"/>
          <a
            href="https://api.whatsapp.com/send?phone=3512526570"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Lumier
          </a>
        </button>

        <button className="insta-btn">
          <img src={insta} alt="logo instagram"/>
          <a
            href="https://www.instagram.com/lumier.deco"
            target="_blank"
            rel="noopener noreferrer"
          >
            Lumier.deco
          </a>
        </button>

        <button className="nube-btn">
          <img src={nube} alt="logo tienda nube"/>
          <p>
            Lumier Tienda Nube
          </p>
        </button>
      </section>
    </>
  );
}
