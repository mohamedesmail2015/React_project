import React, { Component, Fragment } from "react";
import "../../assets/css/custom.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import imgSlider1 from "../../assets/images/shuffle-01.jpg";
import imgSlider2 from "../../assets/images/shuffle-02.jpg";
import imgSlider3 from "../../assets/images/shuffle-03.jpg";
import imgSlider4 from "../../assets/images/shuffle-04.jpg";
import imgSlider5 from "../../assets/images/shuffle-05.jpg";
import imgSlider6 from "../../assets/images/shuffle-06.jpg";

export class Featured extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55 mt-55">
            <h2> Featured Products</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <NavLink className="text-link" to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center" src={imgSlider1} />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                          </i> <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </Col>
            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <NavLink className="text-link" to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center" src={imgSlider2} />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                          </i> <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </Col>
            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <NavLink className="text-link" to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center" src={imgSlider3} />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                          </i> <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </Col>
            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <NavLink className="text-link" to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center" src={imgSlider4} />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                          </i> <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </Col>
            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <NavLink className="text-link" to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center" src={imgSlider5} />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                          </i> <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </Col>
            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <NavLink className="text-link" to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center" src={imgSlider6} />
                    <Card.Body>
                      <p className="product-name-on-card">
                        Perfect Homes Webster Engineered Wood TV
                      </p>
                      <div>
                        <span className="text-warning">
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                          <i className="fa fa-star"></i>
                        </span>
                        <span >
                          <i className="fa fa-star">
                          </i> <i className="fa fa-star"></i>
                        </span>
                      </div>
                      <p className="product-price-on-card">price : 100$</p>
                    </Card.Body>
                  </Card>
                </NavLink>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    );
  }
}

export default Featured;
