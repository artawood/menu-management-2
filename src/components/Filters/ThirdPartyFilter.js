import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

export const ThirdPartyFilter = props => (
  <Dropdown text="Third Parties">
    <Menu vertical>
      {props.thirdParties.map(thirdParty => {
        return (
          <Dropdown text={thirdParty.name} pointing="left" className="link item">
            <Dropdown.Menu>
              <Dropdown.Item>Online</Dropdown.Item>
              <Dropdown.Item>Offline</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        );
      })}
    </Menu>
  </Dropdown>
);
