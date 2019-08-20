import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "Online", value: 1 },
  { key: 2, text: "Offline", value: 2 },
  { key: 3, text: "Clear Filter", value: 3 }
];

export const StatusFilter = props => <Dropdown text="Status" options={options} onChange={props.sortByStatus} />;
