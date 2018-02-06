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
  justify-content: center;
  grid-template-columns: 550px 550px;
  grid-column-gap: 20px;
  grid-row-gap: 50px;

  @media (max-width: 1200px) {
    grid-template-columns: minmax(auto, 550px);
    padding-right: 5px;
    padding-left: 5px;
    grid-row-gap: 20px;
  }

  padding-top: ${props =>
    props.sticky ? props.navHeight + 60 : props.navHeight}px;
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
