import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const ContactComponent = () => {
    return (
        <div className="contact-container-bg">
            <Container className="contact-container">
               <Row>
                   <Col xs={12} md={6}>
                         <h1>FODOO</h1>
                         <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                         veniam, quis nostrud exercitation ullamco laboris</p>
                         <div>
                             <span className="fa fa-facebook-square"></span>
                             <span className="fa fa-instagram-square"></span>
                             <span className="fa fa-github-square"></span>
                         </div>
                   </Col>

                   <Col xs={12} md={3}>
                       <b>Links</b>
                       <br/>
                       <h6>Overview</h6>
                       <h6>Social Media</h6>
                       <h6>Contact</h6>
                   </Col>
                   <Col xs={12} md={3}>
                       <b>Company</b>
                       <br/>
                       <br/>
                       <h6>Overview</h6>
                       <h6>Social Media</h6>
                       <h6>Contact</h6>
                   </Col>
               </Row>
            </Container>
        </div>
    )
}

export default ContactComponent
