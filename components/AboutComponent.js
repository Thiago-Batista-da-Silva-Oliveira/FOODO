import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const AboutComponent = () => {
    return (
        <div className="about-container-bg">
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                     <img className="img-fluid" src="/assests/image-about.png" />
                    </Col>

                    <Col className="about-details" xs={12} md={6}>
                        <div>
                            <h2>Best Offer Town</h2>
                            <b>Lorem ipsum dolor sit amet,
                                consectetur adipiscing elit,
                            </b>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         sed do eiusmod tempor incididunt ut labore et dolore
                         magna aliqua.
                          Ut enim ad minim veniam,
                           quis nostrud exercitation
                            ullamco laboris
                            </p>
                            <button className="btn btn-custom">Explore More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default AboutComponent
