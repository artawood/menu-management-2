import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [];

const style = {
  fontSize: "20px",
  fontWeight: "500"
};

export const ActionFilter = props => (
  <Dropdown text="Action" options={options} onChange={props.sortByLocation} style={style} icon={null} />
);
