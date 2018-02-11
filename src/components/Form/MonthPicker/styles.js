import styled from "styled-components";

// padding inside YearContainer so that height 0 works
export const PaddingContainer = styled.div`
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: ${props => props.theme.border.radius};
  padding: 13px;
`;

export const YearContainer = styled.div`
  background: white;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  width: 280px;
  height: ${props => (props.show ? 294 : 0)}px;
  transition: height 0.2s;
  overflow: hidden;
`;

export const YearTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

export const YearCaption = styled.caption`
  /* background: green; */
  text-align: center;
  margin: 0 auto 35px;
`;

export const YearBody = styled.tbody``;

export const Month = styled.td`
  border: 1px solid ${props => props.theme.color.gray};
  padding: 0;
`;

export const MonthButton = styled.button`
  width: 100%;
  background: ${props => (props.selected ? props.theme.color.primary : "none")};
  border: 0;
  padding: 10px 10px;
  color: ${props =>
    props.selected ? "white" : props.disabled ? "gray" : "inherit"};
  font: inherit;
  font-size: 12px;
  line-height: normal;
  cursor: pointer;
  &:focus {
    outline: 0;
  }
`;

export const NavigateYear = styled.button`
  /* background: green; */
  position: relative;
  box-sizing: border-box;
  float: ${props => props.float};
  top: 32px;
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: ${props => props.theme.border.radius};
  background: none;
  padding: 10px 15px;
  &:focus {
    outline: 0;
  }
`;
