import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./LocationSelector.css";

import data from "../../models/data.js";

class LocationSelector extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Dropdown
        search
        selection
        defaultValue={this.props.id}
        options={data.location}
        placeholder="Select Location"
        name="Location"
        tabIndex="0"
        clearable
      />
    );
  }
}

export default LocationSelector;
