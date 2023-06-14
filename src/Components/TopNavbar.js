import React, { Component } from "react";
import { Container, Navbar, Form, FormControl, Col } from "react-bootstrap";

import { Link, NavLink } from "react-router-dom";
import Logo from "../assets/images/Hyper 10 logo-01.png";
import "../assets/css/TopNavbar.css";
import "../assets/css/custom.css";

export class TopNavbar extends Component {
  render() {
    return (
      // fixed="top"
      <>
        <Navbar className="top-Navbar">
          <Container fluid={true}>
            <Col lg={2} md={4} sm={12} xs={12}>
              <NavLink to="/" title="Hyper_10 ">
                <Navbar.Brand href="#home">
                  <img src={Logo} alt="Logo" className="logo" />
                  {/* Hyper_10 */}
                </Navbar.Brand>
              </NavLink>
            </Col>

            <Col lg={5} md={4} sm={12} xs={12}>
              <Form className="d-flex">
                <FormControl
                  type="search"
                  placeholder="Search"
                  className="me-0"
                  aria-label="Search"
                />
                <NavLink to="/search" title="search" className="search">
                  <i className="fa-solid fa-magnifying-glass"></i>
                </NavLink>
              </Form>
            </Col>

            <NavLink
              to="shoppingCart"
              className="cart-shopping"
              title="shopping cart"
            >
              items 0 <i class="fa-solid fa-cart-shopping"></i>
            </NavLink>

            <NavLink
              to="notification"
              className="heart-icon"
              title="notification"
            >
              <sub>
                <span className="badge text-white bg-danger">5</span>
              </sub>
              <i class="fa-solid fa-bell fa-xl"></i>
            </NavLink>

            <NavLink to="favorate" className="heart-icon" title="Favorite">
              <sub>
                <span className="badge text-white bg-danger">0</span>
              </sub>
              <i class="fa-solid fa-heart fa-xl"></i>
            </NavLink>

            <NavLink to="login" className="user-icon" title="Login">
              <i class="fa-solid fa-share-from-square fa-xl"></i>
            </NavLink>

            <NavLink to="/profile" className="user-icon" title="Profile">
              <i class="fa-solid fa-address-card fa-xl"></i>
            </NavLink>
          </Container>
        </Navbar>
      </>
    );
  }
}

export default TopNavbar;
