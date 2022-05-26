import React from "react";
import { Container } from "../styles/Container.style";
import { FooterStyled } from "../styles/Footer.style";

export const Footer = () => {
  return (
    <FooterStyled>
      <Container className="footer-list">
        <div className="row">
          <h3>Team</h3>
          <div className="col">Lisa</div>
          <div className="col">danielle</div>
          <div className="col">Brian</div>
          <div className="col">Join us!</div>
        </div>
        <div className="row">
          <h3>Learn More</h3>
          <div className="col">Manifesto</div>
          <div className="col">Works</div>
          <div className="col">Stories</div>
        </div>
        <div className="row">
          <h3>Meet Us</h3>
          <div className="col">Studio</div>
          <div className="col">Community</div>
          <div className="col">Workshops</div>
        </div>
        <div className="row">
          <h3>Contact</h3>
          <div className="col">Twitter</div>
          <div className="col">Facebook</div>
          <div className="col">Instagram</div>
        </div>
      </Container>
    </FooterStyled>
  );
};
