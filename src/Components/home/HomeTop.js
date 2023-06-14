import React, { Component } from 'react'
import { Container, Col, Row } from 'react-bootstrap'

import HomeSlider from './HomeSlider'
// import HomeSideBar from './HomeSideBar'
import HomeSideBar_copy from './HomeSideBar copy'

export class HomeTop extends Component {
  render() {
    return (
      <>
        <Container className="p-0 mt-2" fluid="true">
          <Row>
            <Col lg={9} md={9} sm={12} xs={12}>
              <HomeSlider />
            </Col>

            <Col lg={3} md={3} sm={12} xs={12}>
              <HomeSideBar_copy />
            </Col>
          </Row>
        </Container>
      </>
    )
  }
}

export default HomeTop
