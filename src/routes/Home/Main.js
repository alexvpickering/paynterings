import styled from "styled-components";

const Main = styled.div`
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

export default Main;
