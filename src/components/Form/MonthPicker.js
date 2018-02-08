import React from "react";
import { Input } from "./Form";
import styled from "styled-components";

const monthGroups = [
  ["January", "February", "March"],
  ["April", "May", "June"],
  ["July", "August", "September"],
  ["October", "November", "December"]
];

const months = [].concat(...monthGroups);

// padding inside YearContainer so that height 0 works
const PaddingContainer = styled.div`
  border: 1px solid ${props => props.theme.color.gray};
  border-radius: ${props => props.theme.border.radius};
  padding: 13px;
`;

const YearContainer = styled.div`
  background: white;
  position: absolute;
  z-index: 1;
  box-sizing: border-box;
  width: 280px;
  height: ${props => (props.show ? 294 : 0)}px;
  transition: height 0.2s;
  overflow: hidden;
`;

const YearTable = styled.table`
  width: 100%;
  table-layout: fixed;
  border-collapse: collapse;
`;

const YearCaption = styled.caption`
  /* background: green; */
  text-align: center;
  margin: 0 auto 35px;
`;

const YearBody = styled.tbody``;

const Month = styled.td`
  border: 1px solid ${props => props.theme.color.gray};
  padding: 0;
`;

const MonthButton = styled.button`
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

const NavigateYear = styled.button`
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

class MonthPicker extends React.Component {
  constructor() {
    super();

    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();

    this.state = {
      visibleYear: this.currentYear,
      year: this.currentYear,
      month: this.currentMonth,
      show: false
    };
  }

  componentDidMount() {
    console.log("mounted");
    window.addEventListener("click", this.handleClick);
  }

  componentWillUnmount() {
    window.removeEventListener("click", this.handleClick);
  }

  handleClick = e => {
    if (
      this.state.show &&
      e.target !== this.dateInput &&
      e.target !== this.yearContainer &&
      !this.yearContainer.contains(e.target)
    ) {
      this.setState({ show: false });
    }
  };

  showPicker = () => {
    console.log("here2");
    this.setState({ show: true });
  };

  selectDate = e => {
    this.setState({
      month: months.indexOf(e.target.innerText) + 1,
      year: this.state.visibleYear,
      show: false
    });
  };

  isMonthDisabled = month => {
    return this.state.visibleYear !== this.currentYear
      ? false
      : month > this.currentMonth;
  };

  changeVisibleYear = delta => {
    const visibleYear = this.state.visibleYear + delta;
    this.setState({ visibleYear });
  };

  render() {
    return (
      <div>
        <label htmlFor="date">Date:</label>
        <Input
          id="date"
          innerRef={input => (this.dateInput = input)}
          type="text"
          onSelect={this.showPicker}
          value={`${months[this.state.month - 1]} / ${this.state.year}`}
          readOnly
        />
        <YearContainer
          show={this.state.show}
          innerRef={input => (this.yearContainer = input)}
        >
          <PaddingContainer>
            <NavigateYear
              type="button"
              onClick={() => this.changeVisibleYear(-1)}
            >
              <i className="fas fa-chevron-left" />
            </NavigateYear>
            <NavigateYear
              type="button"
              onClick={() => this.changeVisibleYear(1)}
              float="right"
              disabled={this.state.visibleYear === this.currentYear}
            >
              <i className="fas fa-chevron-right" />
            </NavigateYear>
            <YearTable>
              <YearCaption>
                <strong>{this.state.visibleYear}</strong>
              </YearCaption>
              <YearBody>
                {monthGroups.map((monthGroup, i) => {
                  return (
                    <tr key={i}>
                      {monthGroup.map((month, j) => {
                        const key = i * 3 + j + 1;
                        return (
                          <Month key={key}>
                            <MonthButton
                              type="button"
                              i={key}
                              key={key}
                              onClick={this.selectDate}
                              selected={
                                key === this.state.month &&
                                this.state.year === this.state.visibleYear
                              }
                              disabled={this.isMonthDisabled(key)}
                            >
                              {month}
                            </MonthButton>
                          </Month>
                        );
                      })}
                    </tr>
                  );
                })}
              </YearBody>
            </YearTable>
          </PaddingContainer>
        </YearContainer>
      </div>
    );
  }
}

export default MonthPicker;
