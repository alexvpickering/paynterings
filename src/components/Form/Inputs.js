import styled from "styled-components";

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

export const InlineInputs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10px;

  @media (max-width: ${props => props.theme.media.small}) {
    display: block;
  }
`;

/*** AWS S3 Uploader ***/

export const FileInput = styled.input`
  width: 0.1px;
  height: 0.1px;
  opacity: 0;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

export const FileInputLabel = styled.label`
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
