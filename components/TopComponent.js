import React from 'react'
import {Col, Container, Row} from 'react-bootstrap'
const TopComponent = () => {
    return (
        <>
            <div className="background"> </div>
                <div className="texture">
                    <Container className="container-top">
                        <Row className="section-top">
                            <Col className="section-top-left" xs={12} md={6}>
                               <img className="img-fluid" src='/assests/mobile.png' />
                            </Col>
                            <Col  className="section-top-right shadow" xs={12} md={6}>
                                 <div className="plate-img-container">

                                 </div>
                                 <h6>FOODO</h6>
                                 <h2>Get Your Food In</h2>
                                 <h1>FODOO</h1>
                                 <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris </p>
                                 <button className="btn btn-custom">Download App</button>
                            </Col>
                        </Row>
                    </Container>
                </div>
            
        </>
    )
}

export default TopComponent
