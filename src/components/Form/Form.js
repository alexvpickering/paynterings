import styled, { css } from "styled-components";
import { mainPadding, minSides } from "../../styles";
import ReactS3Uploader from "react-s3-uploader";

export const FormContainer = styled.div`
  width: 600px;
  margin: 0 auto;

  @media (max-width: ${props => props.theme.media.small}) {
    width: auto;
  }

  ${minSides};
  ${mainPadding};
`;

export const Form = styled.form`
  padding: 0 15px;
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  border: 1px solid ${props => props.theme.color.gray};
  width: 100%;
  min-width: 280px;
  margin: 20px 0px;
  padding: 10px 15px;
  font: inherit;
  border-radius: ${props => props.theme.border.radius};
`;

const ButtonStyles = css`
  margin: 20px 0;
  display: block;
  cursor: pointer;
  color: white;
  font-family: inherit;
  background: ${props => props.theme.color.primary};
  padding: 15px 25px;
  border-radius: ${props => props.theme.border.radius};
  border: none;
`;

export const Button = styled.button`
  ${ButtonStyles};
`;

export const HalfGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: ${props => props.theme.media.small}) {
    display: block;
  }
`;

/*** AWS S3 Uploader ***/

export const S3Uploader = styled(ReactS3Uploader)`
  /* display: block; */
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const UploadLabel = styled.label`
  cursor: pointer;
  font-family: inherit;
  background: white;
  text-align: left;
  position: relative;
  min-width: 280px;
  margin: 20px 0;
  top: 20px;
  height: 42px;
  box-sizing: border-box;
  padding: 10px 15px;
  border-radius: ${props => props.theme.border.radius};
  border: 1px solid ${props => props.theme.color.gray};

  @media (max-width: ${props => props.theme.media.small}) {
    display: block;
    position: static;
  }
`;
