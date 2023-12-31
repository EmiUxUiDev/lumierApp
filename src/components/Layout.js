import React from "react";
import Banner from "./Banner.js"
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../styles/layout.css"

export default function Layout({ children }) {
  return (
    <main className="wrapper-main">
      <Banner />
      <Navbar />
      {children}
      <Footer />
    </main>
  );
}
