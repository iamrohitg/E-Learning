import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import heroImg from "../images/First.jpg";
import "./hero-section.css";

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime, Anywhere <br /> Learn At Your <br /> Own Pace
              </h2>
              <p className="mb-5">
              Are you prepared to unleash your complete capabilities and embark on an unparalleled educational journey? Search no more! We proudly present our state-of-the-art e-learning platform, where the pursuit of knowledge has no limits and learning is conveniently accessible with just a click.
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HeroSection;
