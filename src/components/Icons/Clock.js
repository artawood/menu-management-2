import React from "react";

export const Clock = props => (
  <svg
    width={props.width}
    height={props.height}
    className={props.className}
    fill={props.fill}
    x="0px"
    y="0px"
    viewBox="0 0 100 125"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M50,95A45,45,0,1,0,5,50,45.05109,45.05109,0,0,0,50,95Zm0-85A40,40,0,1,1,10,50,40.04521,40.04521,0,0,1,50,10ZM70.45361,73.98877,47.5,51.03564V18.57471h5V48.96436L73.98877,70.45361Z" />
  </svg>
);
