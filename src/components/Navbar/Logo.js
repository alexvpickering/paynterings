import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Logo = styled.div`
  white-space: nowrap;
  position: relative;
  top: -5px;
  svg {
    border-right: 1px solid ${props => props.theme.color.gray};
    padding-right: 20px;
    color: ${props => props.theme.color.primary};
    font-size: 1.5em;
  }

  .paynterings {
    padding-left: 20px;
  }

  @media (max-width: 400px) {
    svg {
      border-right: none;
    }
    .paynterings {
      display: none;
      padding-left: 0;
    }
  }
`;

const LinkLogo = props => (
  <Logo {...props}>
    <Link to={props.to} href={props.to}>
      {props.children}
    </Link>
  </Logo>
);

export default LinkLogo;
