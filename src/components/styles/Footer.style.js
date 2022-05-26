import styled from "styled-components";

export const FooterStyled = styled.div`
  background: ${({ theme }) => theme.colors.footer};
  height: 100%;
  width: 100%;
  border-top: 15px solid ${({ theme }) => theme.colors.text};

  .footer-list {
    padding-top: 7vh;
    padding-bottom: 15vh;
    display: flex;
    align-items: flex-start;
    justify-content: space-evenly;
    gap: 10%;
  }

  h3 {
    margin-bottom: 3vh;
    color: ${({ theme }) => theme.colors.text};
  }
  .col {
    color: white;
    font-size: 0.9rem;
    line-height: 170%;
  }
`;
