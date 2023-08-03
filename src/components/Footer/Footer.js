import React from 'react';
import "./Footer.css"
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light text-dark py-4 footer">
      <Container>
        <Row>
          <Col md={4} sm={12}>
            <h5>ONLINE SHOPPING</h5>
            <ul className="list-unstyled">
              <li>Men</li>
              <li>Women</li>
              <li>Kids</li>
              <li>Home & Living</li>
              <li>Beauty</li>
              <li>Gift Cards</li>
              <li>Myntra Insider</li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>USEFUL LINKS</h5>
            <ul className="list-unstyled">
              <li>Blog</li>
              <li>Careers</li>
              <li>Site Map</li>
              <li>Corporate Information</li>
              <li>Whitehat</li>
            </ul>
          </Col>
          <Col md={4} sm={12}>
            <h5>CUSTOMER POLICIES</h5>
            <ul className="list-unstyled">
              <li>Contact Us</li>
              <li>FAQ</li>
              <li>T&C</li>
              <li>Terms Of Use</li>
              <li>Track Orders</li>
              <li>Shipping</li>
              <li>Cancellation</li>
              <li>Returns</li>
              <li>Privacy policy</li>
              <li>Grievance Officer</li>
            </ul>
          </Col>
        </Row>
       
      </Container>
    </footer>
  );
};

export default Footer;
