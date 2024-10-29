import React from 'react';

function Header() {
  return (
    <header className="navbar">
      <div className="logo">
        <h1>SharkStar</h1>
      </div>
      <nav>
        <ul className="nav-links">
          <li><a href="#">Inicio</a></li>
          <li><a href="#">Servicio</a></li>
          <li><a href="#">Nosotros</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
