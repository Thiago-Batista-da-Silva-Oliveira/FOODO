import React from 'react'
import { Container } from 'react-bootstrap'

const DownloadComponent = () => {
    return (
        <div className="download-container-bg">
            <Container className="download-container">
               <h3>Get Food with Foodo</h3>
               <h3>Donwload The App</h3>
               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                veniam, quis nostrud exercitation ullamco laboris</p>
            </Container>
            <Container className="img-download">
                <img src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" className="img-fluid"  />
                <img src="https://i2.wp.com/mofc.unic.ac.cy/wp-content/uploads/revslider/decentralized-2020-home-slider1-12/get-it-on-app-store.png?ssl=1" className="img-fluid" />
            </Container>
        </div>
    )
}

export default DownloadComponent
