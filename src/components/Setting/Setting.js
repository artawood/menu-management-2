import React from "react";
import { Dropdown } from "semantic-ui-react";
import { Cogwheel } from "../Icons";
import styles from "./Setting.module.css";

const options = [
  { key: 1, text: "Turn all locations online", value: 1 },
  { key: 2, text: "Turn all locations offline", value: 2 }
];

const trigger = (
  <span className={styles.hover}>
    <Cogwheel height="31" width="28" />
  </span>
);
const Setting = props => <Dropdown trigger={trigger} options={options} icon={null} direction="left" />;

export default Setting;
