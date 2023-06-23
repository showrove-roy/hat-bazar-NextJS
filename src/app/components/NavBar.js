"use client"
import Link from "next/link";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const NavMenu = () => {
  return (
    <div>
      <Navbar collapseOnSelect expand='lg' className='bg-white'>
        <Container>
          <Navbar.Brand href='#home'>React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls='responsive-navbar-nav' />
          <Navbar.Collapse id='responsive-navbar-nav'>
            <Nav className='me-auto'></Nav>
            <Nav>
              <Link className={"navMenuLink"} href='/'>
                Home
              </Link>
              <Link className={"navMenuLink"} href='/'>
                Find
              </Link>
              <Link className={"navMenuLink"} href='/'>
                Pricing
              </Link>
              <Button
                style={{ backgroundColor: "#1C02BD" }}
                className='text-white fw-medium'>
                CONTACT US
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavMenu;
