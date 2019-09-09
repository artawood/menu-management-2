import React from "react";
import { Dropdown } from "semantic-ui-react";

const style = {
  hourDropdown: {
    minWidth: "100px"
  },
  meridiem: {
    minWidth: "60px"
  }
};
class CloseHourDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedHour: "",
      selectedMeridiem: "",
      duration: [
        { key: "1", text: "1:00", value: "1:00" },
        { key: "2", text: "2:00", value: "2:00" },
        { key: "3", text: "3:00", value: "3:00" },
        { key: "4", text: "4:00", value: "4:00" },
        { key: "5", text: "5:00", value: "5:00" },
        { key: "6", text: "6:00", value: "6:00" },
        { key: "7", text: "7:00", value: "7:00" },
        { key: "3", text: "8:00", value: "8:00" },
        { key: "4", text: "9:00", value: "9:00" },
        { key: "5", text: "10:00", value: "10:00" },
        { key: "6", text: "11:00", value: "11:00" },
        { key: "7", text: "12:00", value: "12:00" }
      ],
      meridiem: [{ key: "1", text: "AM", value: "AM" }, { key: "2", text: "PM", value: "PM" }]
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
          options={this.state.duration}
          value={this.state.selectedHour || this.props.closeTime}
          onChange={this.handleHourOnChange.bind(this)}
          selection
          style={style.hourDropdown}
          className="mr-2"
        />
        <Dropdown
          options={this.state.meridiem}
          value={this.state.selectedMeridiem || this.props.closeMeridiem}
          onChange={this.handleMeridiemOnChange.bind(this)}
          selection
          style={style.meridiem}
        />
      </div>
    );
  }
}

export default CloseHourDropdown;
