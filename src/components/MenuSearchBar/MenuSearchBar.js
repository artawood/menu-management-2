import React from "react";
import { InputGroup, FormControl } from "react-bootstrap";
import { Search } from "../Icons";
// import "./LocationSearchBar.css";

const style = {
  inputGroup: {
    width: "300px"
  },
  formControl: {
    border: "1px solid #c7c7c7"
  }
};

class MenuSearchBar extends React.Component {
  handleChange() {
    this.props.onUserInput(this.refs.filterTextInput.value);
  }
  render() {
    return (
      <InputGroup className="mb-3" style={style.inputGroup}>
        <FormControl
          type="text"
          placeholder={this.props.placeholder}
          value={this.props.filterText}
          ref="filterTextInput"
          onChange={this.handleChange.bind(this)}
          style={style.formControl}
        />
        <div className="search-icon">
          <Search height="15" fill="#9B9898" />
        </div>
      </InputGroup>
    );
  }
}

export default MenuSearchBar;
