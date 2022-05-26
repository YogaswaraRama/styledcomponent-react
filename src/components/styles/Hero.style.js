import styled from "styled-components";

export const HeroStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(media/img_hero.jpg);
  height: 65vh;
  background-size: cover;
  background-position: right;

  h1 {
    position: absolute;
    text-align: center;
    font-size: 4rem;
    color: #4f4d53;
    font-weight: 700;
  }
`;
