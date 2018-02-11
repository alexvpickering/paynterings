import React from "react";
import { Input } from "../Inputs";
import {
  PaddingContainer,
  YearContainer,
  YearTable,
  YearCaption,
  YearBody,
  Month,
  MonthButton,
  NavigateYear
} from "./styles";

const monthGroups = [
  ["January", "February", "March"],
  ["April", "May", "June"],
  ["July", "August", "September"],
  ["October", "November", "December"]
];

const months = [].concat(...monthGroups);

class MonthPicker extends React.Component {
  constructor(props) {
    super(props);

    const date = new Date();
    this.currentYear = date.getFullYear();
    this.currentMonth = date.getMonth();

    this.props.setDate(this.currentMonth, this.currentYear);

    this.state = {
      visibleYear: this.currentYear,
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
    this.setState({ show: true });
  };

  selectDate = e => {
    this.setState({ show: false });
    this.props.setDate(
      months.indexOf(e.target.innerText),
      this.state.visibleYear
    );
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
          value={`${months[this.props.month]} / ${this.props.year}`}
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
                        const key = i * 3 + j;
                        return (
                          <Month key={key}>
                            <MonthButton
                              type="button"
                              i={key}
                              key={key}
                              onClick={this.selectDate}
                              selected={
                                key === this.props.month &&
                                this.props.year === this.state.visibleYear
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
