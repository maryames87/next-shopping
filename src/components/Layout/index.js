import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Link from "next/link";
import styles from "./../../../styles/Home.module.css";
function Layout(props) {
  return (
    <>
      <Navbar className={styles.navColor} >
        <Container>
          <Navbar className={styles.myLogo}>
            <Link href="/">Dress Shop</Link>
          </Navbar>

          <Nav  className={styles.myNav}>
            <Link href="/shop">shop</Link>
            <Link href="/aboutUs">about us</Link>
            <Link href="/contactUs">contact us</Link>

            <br />

            <NavDropdown  title="Link" id="navbarScrollingDropdown">
              <NavDropdown.Item style={{color:"#212121"}} href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item style={{color:"#212121"}} href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item  style={{color:"#212121"}}href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button>Search</Button>
          </Form>
        </Container>
      </Navbar>
      {props.children}
    </>
  );
}

export default Layout;
