import React from "react";

export function Futter() {
    return (
      <footer className="page-footer card-panel deep-purple darken-4">
        <div className="footer-copyright card-panel teal lighten-2">
          <div class="container">
            © {new Date().getFullYear()} - Copyright Text
            <a class="grey-text text-lighten-4 right" href="#!">
              Movie
            </a>
          </div>    
        </div>
      </footer>
    );
}