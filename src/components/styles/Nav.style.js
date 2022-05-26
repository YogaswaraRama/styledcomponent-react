import styled from "styled-components";

export const NavStyled = styled.nav`
  background-color: ${(props) => props.theme.colors.nav};
  height: 48px;
  display: flex;
  align-items: center;
  padding: 0 15%;
`;
