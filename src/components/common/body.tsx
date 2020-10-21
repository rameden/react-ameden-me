import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
const Header: React.FC = () => (
    <>
        <p className="margin-medium-bottom">I modernize, customize and other ‘ize-y things at Oracel! My background involves pushing the limits of of what we can build on the backend and how we can experience it on the frontend. My passion is finding the best way to complete a project, optimization and teaching those around me.</p>
        <Container className="containerWrapper">
            <Row className="show-container">
                <Col xs={12} md={6}>
                    <h4>My Altero Ego</h4>
                    <p>I challenged myself to learn 3D modeling and have since turned my skills into <a target="_blank" rel="noopener noreferrer" href="https://www.etsy.com/shop/alteregoarmory">The Alter Ego Armory</a></p>
                </Col>
                <Col xs={12} md={6}>
                    <h4>How'd you build this site?!</h4>
                    <p>Because I love open-source it's available for you to see. Find a bug? Report it! <a target="_blank" rel="noopener noreferrer" href="https://github.com/rameden/react-ameden-me">View source.</a></p>
                </Col>
            </Row>
        </Container>
    </>
);
export default Header;