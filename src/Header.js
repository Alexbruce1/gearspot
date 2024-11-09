import React from "react";
import { Link } from "react-router-dom";
import "./Header.css"

function Header() {
  return (
    <header className="App-header">
      <h1 className="gearspot-header-title">
        GearSpot
      </h1>
      <div className="header-menu-container">
        <nav className="header-menu">
          <Link className="menu-item" to="/">
            <h3>Home</h3>
          </Link>
          <Link className="menu-item" to="/new-cars">
            <h3>New Cars</h3>
          </Link>
          <Link className="menu-item" to="/used-cars">
            <h3>Used Cars</h3>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header;