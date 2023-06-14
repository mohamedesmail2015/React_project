import React, { Component, Fragment } from "react";
import "../../assets/css/custom.css";
import "../../assets/css/common.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../../assets/css/button.css";
import Slider from "react-slick";
import { Container, Row, Card } from "react-bootstrap";
import { Link, NavLink } from "react-router-dom";

import imgSlider1 from "../../assets/images/shuffle-01.jpg";
import imgSlider2 from "../../assets/images/shuffle-02.jpg";
import imgSlider3 from "../../assets/images/shuffle-03.jpg";
import imgSlider4 from "../../assets/images/shuffle-04.jpg";
import imgSlider5 from "../../assets/images/shuffle-05.jpg";

export class NewArrival extends Component {
  constructor() {
    super();

    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
  }

  next() {
    this.slider.slickNext();
  }
  previous() {
    this.slider.slickPrev();
  }

  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1500,
    };
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2>
              New Arrival &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.previous}>
                <i className="fa fa-angle-left"></i>
              </a>
              &nbsp;
              <a className="btn btn-sm ml-2 site-btn" onClick={this.next}>
                <i className="fa fa-angle-right"></i>
              </a>
            </h2>

            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Slider ref={(c) => (this.slider = c)} {...settings}>
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card">
                    <img className="center" src={imgSlider1} alt="Logo" />
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
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card">
                    <img className="center" src={imgSlider2} alt="Logo" />
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
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card">
                    <img className="center" src={imgSlider3} alt="Logo" />
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
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card">
                    <img className="center" src={imgSlider4} alt="Logo" />
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
              <div>
                <NavLink to="/productDetails">
                  <Card className="image-box card">
                    <img className="center" src={imgSlider5} alt="Logo" />
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
            </Slider>
          </Row>
        </Container>
      </Fragment>
    );
  }
}
export default NewArrival;
