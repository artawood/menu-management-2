import React from "react";
import { Dropdown } from "semantic-ui-react";

import time from "../../models/time.js";

const style = {
  hourDropdown: {
    minWidth: "100px"
  },
  meridiem: {
    minWidth: "60px"
  }
};

const hourOption = [
  { key: "close-1", text: "1:00", value: "1:00" },
  { key: "close-2", text: "2:00", value: "2:00" },
  { key: "close-3", text: "3:00", value: "3:00" },
  { key: "close-4", text: "4:00", value: "4:00" },
  { key: "close-5", text: "5:00", value: "5:00" },
  { key: "close-6", text: "6:00", value: "6:00" },
  { key: "close-7", text: "7:00", value: "7:00" },
  { key: "close-3", text: "8:00", value: "8:00" },
  { key: "close-4", text: "9:00", value: "9:00" },
  { key: "close-5", text: "10:00", value: "10:00" },
  { key: "close-6", text: "11:00", value: "11:00" },
  { key: "close-7", text: "12:00", value: "12:00" }
];

const meridiemOption = [{ key: "1", text: "AM", value: "AM" }, { key: "2", text: "PM", value: "PM" }];

class OpenHoursDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHour: "",
      selectedMeridiem: ""
    };
  }
  handleHourOnChange = (e, data) => {
    console.log(data.value);
    this.setState({ selectedHour: data.value });
  };
  handleMeridiemOnChange = (e, data) => {
    console.log(data.value);
    this.setState({ selectedMeridiem: data.value });
  };
  render() {
    return (
      <div className="d-flex">
        <div className="pr-2 mt-2">Open</div>
        <Dropdown
          options={hourOption}
          value={this.state.selectedHour || this.props.openTime}
          onChange={this.handleHourOnChange.bind(this)}
          selection
          style={style.hourDropdown}
          className="mr-2"
        />
        <Dropdown
          options={meridiemOption}
          value={this.state.selectedMeridiem || this.props.openMeridiem}
          onChange={this.handleMeridiemOnChange.bind(this)}
          selection
          style={style.meridiem}
        />
      </div>
    );
  }
}

export default OpenHoursDropdown;
