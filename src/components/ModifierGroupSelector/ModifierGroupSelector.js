import React from "react";
import { Dropdown } from "semantic-ui-react";

const ModifierGroupSelector = props => {
  const { data, placeholder } = props;

  //Converts objects into array
  //options props expects array
  const arr = Object.values(data);
  return <Dropdown placeholder={placeholder} fluid multiple search selection options={arr} />;
};

export default ModifierGroupSelector;
