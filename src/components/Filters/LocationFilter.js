import React from "react";
import { Dropdown } from "semantic-ui-react";

const options = [
  { key: 1, text: "Sort by A - Z", value: 1 },
  { key: 2, text: "Sort by Z - A", value: 2 },
  { key: 3, text: "Sort by Live", value: 3 },
  { key: 4, text: "Sort by Not Live", value: 4 },
  { key: 5, text: "Clear Filter", value: 5 }
];

export const LocationFilter = () => <Dropdown text="Location" options={options} />;
