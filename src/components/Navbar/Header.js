import styled from "styled-components";

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
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
    props.isAuthenticated && `> div > a:first-child {padding-right: 20px;}`};

  ${props =>
    props.sticky &&
    `position: fixed; top: 0; left: 0; right: 0; padding: 8px 20px`};
`;

export default Header;
