import React from "react";

export function Navbar() {
    return(
        <nav>
            <div className="nav-wrapper header_nav deep-purple darken-4">
                <a href="/khgfj" className="brand-logo"> React </a>
                <ul id="nav-mobile" className="right hide-on-med-and-down">
                    <li>
                        <a href="/sasas">Movie</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}