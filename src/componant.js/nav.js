import React from "react";
import {Navbar,Nav,Form} from 'react-bootstrap';
import { Link } from "react-router-dom";

function Navb({favorites,handelSearch}) {
    return (
      <div>
       <Navbar fixed="top" collapseOnSelect expand="lg" className="nav" variant="dark">
  <Navbar.Brand href="#home"><img className="logo" src="./images/logo1.png" alt =""/></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="ml-auto">
    <Form inline>
         <input type="text" 
         placeholder="Search" 
         onChange = {handelSearch}
         className="mr-sm-2 srch" />
         </Form>
      <Nav.Link href="#deets"><Link to="./"><i class="fas fa-home"></i></Link></Nav.Link>
      <Nav.Link href="#deets"><Link to="./favoris"><i class="fas fa-heart"></i> <span className="val-favorite"> {favorites}</span></Link></Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>  
      </div>
    );
  }

  export default Navb;