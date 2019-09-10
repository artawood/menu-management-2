import React from "react";
import { Dropdown } from "semantic-ui-react";

const style = {
  minWidth: "100px"
};
class HoursDropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
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
      ]
    };
  }

  render() {
    return (
      <div>
        <span style={style}>
          <Dropdown
            options={this.state.duration}
            value={this.state.value || this.props.openTime}
            selection
            style={style}
          />
        </span>
      </div>
    );
  }
}

export default HoursDropdown;
