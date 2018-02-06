import styled from "styled-components";
import FionaImage from "../assets/Gillian's BD Coffee 072 - Copy.JPG";

export const HeroImage = styled.div`
  background-image: url("${FionaImage}");
  height: calc(100vh - ${props => props.navHeight}px);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const Main = styled.div`
  display: grid;
  padding-top: ${props => (props.sticky ? props.navHeight + 50 + 2 : 50)}px; 
  /* background: blue; */
  /* background: ${props => props.theme.color.white}; */
  grid-template-columns: auto auto;
  grid-column-gap: 20px;
  grid-row-gap: 50px;
  max-width: 1200px;
  padding: 50px;

  @media (max-width: 1050px) {
    grid-template-columns: auto;
  }

  /* padding-top: ${props =>
    props.sticky ? props.navHeight + 60 : props.navHeight}px;
  transition: padding 0.3s; */
`;

export const Logo = styled.a`
  white-space: nowrap;
  svg {
    border-right: 1px solid ${props => props.theme.color.gray};
    padding-right: 20px;
    color: ${props => props.theme.color.pink};
  }

  .paynterings {
    padding-left: 20px;
    font-family: "Montez", cursive;
    font-size: 35px;
  }
`;
