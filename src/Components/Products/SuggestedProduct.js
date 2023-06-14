import React, { Component, Fragment } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap'
import main_img from '../../assets/images/products/product1/1.jpeg'
import one_img from '../../assets/images/products/product1/2.jpeg'
import two_img from '../../assets/images/products/product1/3.jpeg'
import three_img from '../../assets/images/products/product1/4.jpeg'
import four_img from '../../assets/images/products/product1/5.jpeg'
export class SuggestedProduct extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> Suggested Products</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={main_img} />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center w-75" src={main_img} />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center w-75" src={main_img} />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center w-75" src={main_img} />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center w-75" src={main_img} />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-1" lg={2} md={2} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center w-75" src={main_img} />
                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <p className="product-price-on-card">price : 100$</p>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </Fragment>
    )
  }
}

export default SuggestedProduct
