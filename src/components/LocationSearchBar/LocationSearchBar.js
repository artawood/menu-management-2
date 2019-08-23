import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Search } from "../Icons";
import "./LocationSearchBar.css";

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
        <div className="search-icon">
          <Search height="15" fill="#9B9898" />
        </div>
      </InputGroup>
    );
  }
}

export default LocationSearchBar;
