import React from "react";
import { Dropdown } from "semantic-ui-react";

export const sortMenuAvailable = [
  { key: 1, text: "Available", value: 1 },
  { key: 2, text: "Not Available", value: 2 },
  { key: 3, text: "Clear Filter", value: 3 }
];

const style = {
  fontSize: "20px",
  fontWeight: "500"
};

export const MenuStatusFilter = props => (
  <Dropdown
    text={props.text}
    options={sortMenuAvailable}
    value={props.value || ""}
    onChange={props.sortByStatus}
    style={style}
  />
);
