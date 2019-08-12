import React from "react";
const style = {
  color: "#d52b2b",
  fontWeight: "500",
  fontStyle: "italic"
};
const SoldOutDuration = props => (
  <div className="mt-2">
    <span style={style}>for {props.soldOutDuration}</span>
  </div>
);

export default SoldOutDuration;
