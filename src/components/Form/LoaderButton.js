import React from "react";
import styled, { css } from "styled-components";

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
  transition: width 1s;

  &:disabled {
    cursor: not-allowed;
    opacity: 0.65;
  }
`;

const Button = styled.button.attrs({
  disabled: false
})`
  ${ButtonStyles};
`;

const LoaderButton = ({
  isLoading,
  text,
  loadingText,
  disabled = false,
  ...props
}) => (
  <Button disabled={disabled || isLoading} {...props}>
    {!isLoading ? text : loadingText}
  </Button>
);

export default LoaderButton;
