import React from "react";

export function Navbar() {
    return (
      <nav>
        <div className="nav-wrapper header_nav deep-purple darken-2">
          <a href="/khgfj" className="brand-logo">
            React
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <input className="search" type="text" placeholder="Seacrch..." />
            </li>
          </ul>
        </div>
      </nav>
    );
}