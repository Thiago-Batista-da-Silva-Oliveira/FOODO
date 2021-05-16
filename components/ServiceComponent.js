import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ServiceComponent = () => {
    return (
        <div className="service-container-bg">
            <Container className="service-container">
                <Row>
                    <Col xs={12} md={4}>
                      <img className="img-fluid service-img" src="/assests/image-one.png" />
                      <h2>Best Offer In Town</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      </p>

                    </Col>

                    <Col xs={12} md={4}>
                         <img className="img-fluid service-img" src="/assests/image-two.png" />
                      <h2>Fast Delivery</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      </p>
                    </Col>

                    <Col xs={12} md={4}>
                    <img className="img-fluid service-img" src="/assests/image-three.png" />
                      <h2>Quality Food</h2>
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      </p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ServiceComponent
