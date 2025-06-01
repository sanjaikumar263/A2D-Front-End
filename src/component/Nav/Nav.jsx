import React, { useState } from "react";
import { asssts } from "../../assets/assets"; // Note: Fix typo in 'asssts' to 'assets'
import "./Nav.css";

const Nav = () => {
  const [menu, setMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuClick = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="nav-bar bg-black py-3">
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <img src={asssts.logo} alt="logo" /> {/* Fix typo: asssts -> assets */}
        </div>
        <button className="menu d-lg-none" onClick={handleMenuClick}>
          ☰
        </button>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <ul className="nav-list d-flex align-items-center">
            <li
              className="nav-item"
              onClick={() => setMenu("Home")}
              style={{
                color: menu === "Home" ? "orange" : "white",
                fontWeight: menu === "Home" ? 600 : 200,
              }}
            >
              <a href="#home">
              {menu === "Home" ? "🪖 Home" : "Home"}
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => setMenu("About")}
              style={{
                color: menu === "About" ? "orange" : "white",
                fontWeight: menu === "About" ? 600 : 200,
              }}
            >
              <a href="#about">
              {menu === "About" ? "🪖 About" : "About"}
              </a>
            </li>
            <li
              className="nav-item"
              onClick={() => setMenu("Product")}
              style={{
                color: menu === "Product" ? "orange" : "white",
                fontWeight: menu === "Product" ? 600 : 200,
              }}
            >
              <a href="#product">
                {menu === "Product" ? "🪖 Products" : "Products"}
              </a>
            </li>
            <li>
              <a href="#contact">
                <button className="btn btn-warning px-4">Contact</button>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav; 