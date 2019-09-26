import React from "react";
import { Dropdown } from "semantic-ui-react";

const ModifierGroupSelector = props => {
  const { data, placeholder } = props;
  return <Dropdown placeholder={placeholder} fluid multiple search selection options={data} />;
};

export default ModifierGroupSelector;
