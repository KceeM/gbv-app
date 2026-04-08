import React from "react";
import "./NavBar.css";

function NavBar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
      <img src="/South African map logo1.png" alt="GBV Registry App Logo" className="navbar-logo" />

      <h1 className="logo">GBV Registry</h1>
      <ul className="nav-links">
        <li 
          className={currentPage === "map" ? "active" : ""} 
          onClick={() => setCurrentPage("map")}
        >
          Map
        </li>
        <li 
          className={currentPage === "news" ? "active" : ""} 
          onClick={() => setCurrentPage("news")}
        >
          News
        </li>
        <li 
          className={currentPage === "reports" ? "active" : ""} 
          onClick={() => setCurrentPage("reports")}
        >
          Reports
        </li>
        <li 
          className={currentPage === "support" ? "active" : ""} 
          onClick={() => setCurrentPage("support")}
        >
          Support
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;