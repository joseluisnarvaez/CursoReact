import React from 'react';
import CartWidget from '../cartWidget/Carrito';

function Navbar() {
    return (
      <>
        <nav className='navbar navbar-expand-lg bg-light'>
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Comercio Don fuenzalida</a>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Gorras</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Camisetas</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Balones</a>
              </li>
            </ul>
          </div>
        </div>
          <CartWidget />
      </nav>
       
      </>
    );
}

export default Navbar;
