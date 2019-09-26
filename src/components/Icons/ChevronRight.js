import React from "react";

export const ChevronRight = props => (
  <svg
    width={props.width}
    height={props.height}
    className={props.className}
    fill={props.fill}
    viewBox="0 0 100 110"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M2,50A48,48,0,1,0,50,2,48,48,0,0,0,2,50Zm50.1-1.41L35.17,31.66a2,2,0,0,1,0-2.83l5.66-5.66a2,2,0,0,1,2.83,0L69.08,48.59a2,2,0,0,1,0,2.82L43.66,76.83a2,2,0,0,1-2.83,0l-5.66-5.66a2,2,0,0,1,0-2.83L52.1,51.41A2,2,0,0,0,52.1,48.59Z" />
  </svg>
);
