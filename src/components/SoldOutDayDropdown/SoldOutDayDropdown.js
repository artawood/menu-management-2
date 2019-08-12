import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./index.css";

const style = {
  minWidth: "90px"
};

class SoldOutDayDropdown extends React.Component {
  state = {
    value: "",
    duration: [
      { key: "1", text: "1 day", value: "1 day" },
      { key: "2", text: "2 days", value: "2 days" },
      { key: "3", text: "3 days", value: "3 days" },
      { key: "4", text: "4 days", value: "4 days" },
      { key: "5", text: "5 days", value: "5 days" },
      { key: "6", text: "6 days", value: "6 days" },
      { key: "7", text: "7 days", value: "7 days" }
    ]
  };

  render() {
    return (
      <div className="d-flex">
        <div className="mt-2">
          <span>for &nbsp;</span>
        </div>
        <Dropdown
          selection
          defaultValue={this.state.duration[0].value}
          options={this.state.duration}
          name="days"
          tabIndex="0"
          className="soldOutDay"
          style={style}
        />
      </div>
    );
  }
}

export default SoldOutDayDropdown;
