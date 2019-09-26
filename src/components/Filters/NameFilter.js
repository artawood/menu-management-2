import React from "react";
import { Dropdown } from "semantic-ui-react";
import "./Filters.css";

export const nameSortOptions = [
  { key: 1, text: "Custom", value: 1 },
  { key: 2, text: "Sort by A - Z", value: 2 },
  { key: 3, text: "Sort by Z - A", value: 3 }
];

const style = {
  fontSize: "20px",
  fontWeight: "500"
};

export const NameFilter = props => (
  <Dropdown
    text={props.text}
    options={nameSortOptions}
    value={props.value || ""}
    onChange={props.sortByName}
    style={style}
  />
);
