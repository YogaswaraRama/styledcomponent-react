import styled from "styled-components";

export const MainStyled = styled.div`
  text-align: center;
  h1 {
    font-size: 3.7rem;
    font-weight: 700;
    color: #e8be02;
    padding-bottom: 7vh;
  }

  .img-wrapper {
    margin: 0;
    padding: 10vh 0;
    text-align: left;
    display: flex;
    gap: 2%;
    justify-content: center;
  }
  .col {
    margin-right: 5vw;
    align-self: flex-start;
  }

  img {
    display: flex;
    align-self: flex-start;
    width: 8vw;
  }
  .name {
    color: #e8be02;
  }
`;
