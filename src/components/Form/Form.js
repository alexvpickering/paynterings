import styled from "styled-components";
import { mainPadding, minSides } from "../../utils/styles";

export const FormContainer = styled.div`
  width: 600px;
  margin: 0 auto;

  @media (max-width: 630px) {
    width: auto;
  }

  ${minSides};
  ${mainPadding};
`;

export const Form = styled.form`
  /* background: yellow; */
  padding: 0 15px;
`;

export const Input = styled.input`
  display: block;
  /* background-color: green; */

  box-sizing: border-box;
  border: 1px solid ${props => props.theme.color.gray};
  width: 100%;
  margin: 20px 0px;
  padding: 10px 20px;
  border-radius: ${props => props.theme.border.radius};
`;

export const Button = styled.button`
  cursor: pointer;
  color: white;
  font-family: inherit;
  background: ${props => props.theme.color.primary};
  padding: 15px 25px;
  border-radius: ${props => props.theme.border.radius};
  border: none;
`;
