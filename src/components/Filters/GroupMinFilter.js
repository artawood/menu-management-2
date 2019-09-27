import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [];

const style = {
  fontSize: "20px",
  fontWeight: "500"
};

export const GroupMinFilter = props => (
  <Dropdown text="Min" options={options} onChange={props.sortByLocation} style={style} icon={null} />
);
