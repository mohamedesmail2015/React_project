import React, { Component, Fragment } from 'react'

import { Container, Row, Col, Card, Button } from 'react-bootstrap'

import imgSlider6 from '../../assets/images/shuffle-06.jpg'

export class Favorate extends Component {
  render() {
    return (
      <Fragment>
        <Container className="text-center" fluid={true}>
          <div className="section-title text-center mb-55">
            <h2> Favorate produts</h2>
            <p>Some Of Our Exclusive Collection, You May Like</p>
          </div>
          <Row>
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>

                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>
            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            </Col>

            <Col className="p-0" lg={3} md={3} sm={6}>
              <div>
                <Card className="image-box card w-100">
                  <img className="center" src={imgSlider6} />

                  <Card.Body>
                    <p className="product-name-on-card">
                      Perfect Homes Webster Engineered Wood TV
                    </p>
                    <Button className="btn-danger btn-sm">
                      {' '}
                      <i className="fa fa-trash-alt"></i> Remove{' '}
                    </Button>
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

export default Favorate
