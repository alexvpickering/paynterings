import styled from "styled-components";
import FionaImage from "../../assets/Gillian's BD Coffee 072 - Copy.JPG";
import { connect } from "react-redux";

const HeroImage = styled.div`
  background-image: url("${FionaImage}");
  height: calc(100vh - ${props => props.navHeight}px);
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export default HeroImage;
