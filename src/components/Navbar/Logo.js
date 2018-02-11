import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  white-space: nowrap;
  height: 45px;
  svg {
    border-right: 1px solid ${props => props.theme.color.gray};
    padding-right: 20px;
    color: ${props => props.theme.color.primary};
  }

  .paynterings {
    padding-left: 20px;
    font-family: "Montez", cursive;
    font-size: 35px;
  }

  ${props =>
    props.isAuthenticated &&
    `@media (max-width: 400px) {
      .paynterings {
        display: none;
      }
      svg {
        margin-top: 11px;
        margin-bottom: 14px;
        border-right: none;
      }
    }
    `};
`;

const LinkLogo = props => (
  <Logo {...props}>
    <Link to={props.to} href={props.to}>
      {props.children}
    </Link>
  </Logo>
);

export default LinkLogo;
