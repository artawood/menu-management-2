import React from "react";
import SoldOutDuration from "../SoldOutDuration";

const ModifierList = props => (
  <tr>
    <td>
      {props.name} ({props.calories + " calories"}){" "}
    </td>
    <td className="text-center">{props.price}</td>
    <td>{props.groupName}</td>
    <td className="text-center">{props.groupMin}</td>
    <td className="text-center">{props.groupMax}</td>
    <td className="text-center">
      {props.soldOut ? (
        <div>
          <span className="itemSoldOut">Sold Out</span>
          <SoldOutDuration soldOutDuration={props.scheduledFor} />
        </div>
      ) : (
        <span className="itemAvailable">
          <i className="fas fa-check" />
        </span>
      )}
    </td>
  </tr>
);

export default ModifierList;
