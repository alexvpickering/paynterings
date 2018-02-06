import styled from "styled-components";
import React from "react";
import { Logo } from "./styled";

const Header = styled.header`
  display: grid;
  position: relative;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  grid-template-columns: auto 1fr;
  font-size: 20px;
  grid-auto-flow: column;
  align-items: center;
  /* grid-gap: 30px; */
  border: 1px solid rgba(0, 0, 0, 0.1);
  color: #384049;
  padding: 30px 20px;
  transition: padding 0.3s;
  z-index: 1;

  a {
    text-decoration: none;
    color: inherit;
    &:hover {
      color: gray;
    }
  }

  ${props =>
    props.sticky
      ? `position: fixed; top: 0; left: 0; right: 0; padding: 8px 20px`
      : ""};
`;

export class Navbar extends React.Component {
  componentDidMount() {
    this.props.getNavHeight(this.header);
  }

  render() {
    return (
      <Header
        innerRef={input => (this.header = input)}
        sticky={this.props.sticky}
      >
        <Logo href="#">
          <i className="fa fa-home" />
          <span className="paynterings">Paynterings</span>
        </Logo>
        <span />
        <a href="#">about</a>
      </Header>
    );
  }
}
