import React, { Component, Fragment } from "react";
import "../../assets/css/custom.css";
import { Container, Row, Col, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import img1 from "../../assets/images/stats.png";
import img2 from "../../assets/images/quote.jpg";
import img3 from "../../assets/images/mobile.png";

export class Collection extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55 mt-55">
            <h2> Collection</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>

          <Row>
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img1} />
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
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img2} />
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
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img3} />
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
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img1} />
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
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img2} />
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
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img3} />
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
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img2} />
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
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card w-100">
                    <img className="center w-75" src={img3} />
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
export default Collection;
