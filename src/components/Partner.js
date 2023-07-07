import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Company = () => {
  return (
    <section>
      <Container>
        <Col lg="12" className="text-center mb-5">
          <h2 className="fw-bold">Our Partner Companies</h2>
        </Col>
        <Row>
          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <img src="https://example.com/vimeo-icon.png" alt="Vimeo" className="partner-icon" />
              Vimeo
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <img src="https://example.com/pinterest-icon.png" alt="Pinterest" className="partner-icon" />
              Pinterest
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <img src="https://example.com/dribbble-icon.png" alt="Dribbble" className="partner-icon" />
              Dribbble
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <img src="https://example.com/apple-icon.png" alt="Apple" className="partner-icon" />
              Apple
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h3 className="d-flex align-items-center gap-1">
              <img src="https://example.com/finder-icon.png" alt="Finder" className="partner-icon" />
              Finder
            </h3>
          </Col>

          <Col lg="2" md="3" sm="4" xs="6">
            <h2 className="d-flex align-items-center gap-1">
              <img src="    imageUrl: 'https://source.unsplash.com/400x300/?webinars',
" alt="Google" className="partner-icon" />
              Google
            </h2>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Company;
