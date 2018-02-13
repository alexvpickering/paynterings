import styled from "styled-components";
import { mainPadding, minSides } from "../../styles";

export const FormContainer = styled.div`
  width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.media.small}) {
    width: auto;
  }

  ${minSides};
  ${mainPadding};
  padding-top: 100px;
`;

export const Form = styled.form`
  padding: 0 15px;
`;
