import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default function Header() {
  return (
    <Navbar expand="lg" className="navbar-light bg-white shadow-sm">
      <Container>
        <Navbar.Brand href="#">
          <img src="./img.jpeg" alt="Logo" width="40" className="rounded-circle" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#projects">Projects</Nav.Link>
            <Nav.Link href="#journey">Journey</Nav.Link>
            <Nav.Link href="#services">Service</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}






// import Link from 'next/link'
// import React from 'react'
// // import "@/../bootstrap/dist/css/bootstrap.min.css";
// export default function Navbar() {
//   return (
//     <div className="container-fluid">
// <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
//   <div className="container">
//     <a className="navbar-brand mt-2 mt-lg-0" href="#">
//     </a>

//     <button
//       className="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <i className="fas fa-bars"></i>
//     </button>

//     <div className="collapse navbar-collapse" id="navbarSupportedContent">
//       <div className="mx-auto d-flex flex-column align-items-center " >
//         <ul className="navbar-nav mb-2 mb-lg-0">
//           <li className="nav-item">
//             <Link className="nav-link text-white" href="/home">Home</Link>
//           </li>
//           <li className="nav-item"> 
//             <Link className="nav-link text-white  " href="/menu">Menu</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" href="/contactus">Contact Us</Link>
//           </li>
//           <li className="nav-item">
//             <Link className="nav-link text-white" href="">About Us</Link>
//           </li>
        
//         </ul>
//       </div>
//       <ul className="navbar-nav ms-auto mb-2 mb-lg-0 d-flex align-items-center ">
//         <li className="nav-item">
//           <Link className="nav-link btn bg-success text-white p-3" href="/book">Book Now</Link>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>



//     </div>
//   )
// }
