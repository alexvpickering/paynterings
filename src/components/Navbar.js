import styled from "styled-components";
import React from "react";
import { Link } from "react-router-dom";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: baseline;

  background: rgba(255, 255, 255, 0.95);
  box-shadow: 0 1px 10px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(0, 0, 0, 0.1);
  font-size: 20px;
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

const Logo = styled(Link)`
  white-space: nowrap;
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
`;

class Navbar extends React.Component {
  componentDidMount() {
    if (this.props.getNavHeight) this.props.getNavHeight(this.header);
  }

  render() {
    return (
      <Header
        innerRef={input => (this.header = input)}
        sticky={this.props.sticky}
      >
        <Logo to="/">
          <i className="fa fa-home" />
          <span className="paynterings">Paynterings</span>
        </Logo>
        <Link to="/login">login</Link>
      </Header>
    );
  }
}

export default Navbar;
