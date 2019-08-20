import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";

class LocationSearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <InputGroup>
        <FormControl
          type="text"
          placeholder="Search..."
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
        />
      </InputGroup>
    );
  }
}

export default LocationSearchBar;
