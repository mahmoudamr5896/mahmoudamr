import Link from 'next/link'
import React from 'react'
// import "@/../bootstrap/dist/css/bootstrap.min.css";
export default function Navbar() {
  return (
    <div className="container-fluid bg-dark">
<nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
  <div className="container-fluid">
    
    <button
      data-mdb-collapse-init
      className="navbar-toggler"
      type="button"
      data-mdb-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>

    <div className="collapse navbar-collapse " id="navbarSupportedContent">
      <a className="navbar-brand mt-2 mt-lg-0" href="#">
        <img
          src="https://mdbcdn.b-cdn.net/img/logo/mdb-transaprent-noshadows.webp"
          height="15"
          alt="MDB Logo"
          loading="lazy"
        />
      </a>

      <ul className="navbar-nav me-auto mb-2 text-center mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link" href="/home">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/menu">Menu</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/book">Book Now</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" href="/contactus">Contact Us</Link>
        </li>
      </ul>
    </div>

    <div className="d-flex align-items-center">
      <a className="text-reset me-3" href="#">
        <i className="fas fa-shopping-cart"></i>
      </a>
      <div className="dropdown">
        <a
          data-mdb-dropdown-init
          className="dropdown-toggle d-flex align-items-center hidden-arrow"
          href="#"
          id="navbarDropdownMenuAvatar"
          role="button"
          aria-expanded="false"
        >
          <img
            src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
            className="rounded-circle"
            height="25"
            alt="Black and White Portrait of a Man"
            loading="lazy"
          />
        </a>
        <ul
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="navbarDropdownMenuAvatar"
        >
          <li>
            <a className="dropdown-item" path="/home">My profile</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Settings</a>
          </li>
          <li>
            <a className="dropdown-item" href="#">Logout</a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</nav>

    </div>
  )
}
