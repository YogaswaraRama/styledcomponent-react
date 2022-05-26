import React from "react";
import { MainStyled } from "../styles/Main.style";
import { Container } from "./../styles/Container.style";

export const Main = () => {
  return (
    <Container>
      <MainStyled>
        <h1>How it started</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris n isi ut aliquip ex ea commodo
          consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in c ulpa qui officia deserunt mollit anim id est laborum.
        </p>

        <Container className="img-wrapper">
          <img src="media/img_lisa_circle.png" alt="" />
          <div className="col">
            <p className="name">Lisa</p>
            <p>lisa@gtd.co</p>
          </div>
          <img src="media/img_danielle_circle.png" alt="" />
          <div className="col">
            <p className="name">Danielle</p>
            <p>danielle@gtd.co</p>
            <p>(123) 456-7890</p>
          </div>
        </Container>
      </MainStyled>
    </Container>
  );
};
