import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

const style = {
  border: "1px solid #c7c7c7"
};

class LocationSearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search for location"
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
          style={style}
        />
      </InputGroup>
    );
  }
}

export default LocationSearchBar;
