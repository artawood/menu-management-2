import React from "react";
import { Close } from "../Icons";

export const CloseButton = props => (
  <button type="button" class="close" data-dismiss="modal" aria-label="Close" onClick={() => props.handleClose()}>
    <span aria-hidden="true">
      <Close width="32" height="32" />
    </span>
  </button>
);
