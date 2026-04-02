import React from "react";
import "./NavBar.css";

function NavBar({ currentPage, setCurrentPage }) {
  return (
    <nav className="navbar">
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