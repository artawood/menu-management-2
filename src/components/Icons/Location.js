import React from "react";

const style = {
  color: "#000000"
};

export const Location = props => (
  <svg
    width={props.width}
    height={props.height}
    className={props.className}
    fill="#9B9898"
    viewBox="0 0 292 480"
    version="1.1"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      class="fil0"
      d="M146 0c80,0 146,65 146,146 0,65 -47,114 -84,162l-55 73c-4,4 -10,4 -14,0l-55 -73c-37,-48 -84,-97 -84,-162 0,-81 65,-146 146,-146zm0 17c-71,0 -129,58 -129,129 0,59 46,107 80,152l49 64 49 -64c34,-45 80,-93 80,-152 0,-71 -58,-129 -129,-129z"
    />
    <path
      class="fil0"
      d="M146 91c30,0 55,25 55,55 0,30 -25,55 -55,55 -30,0 -55,-25 -55,-55 0,-30 25,-55 55,-55zm0 17c-21,0 -38,17 -38,38 0,21 17,38 38,38 21,0 38,-17 38,-38 0,-21 -17,-38 -38,-38z"
    />
  </svg>
);
