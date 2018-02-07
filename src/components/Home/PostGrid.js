import styled from "styled-components";
import { mainPadding, minSides } from "../../utils/styles";

const PostGrid = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 550px 550px;
  grid-column-gap: 20px;
  grid-row-gap: 50px;

  ${mainPadding};

  @media (max-width: 1200px) {
    grid-template-columns: minmax(auto, 550px);
    grid-row-gap: 20px;
    ${minSides};
  }
`;

export default PostGrid;
