import React from "react";
import { Dropdown, Menu } from "semantic-ui-react";

const options = [];

const style = {
  fontSize: "20px",
  fontWeight: "500"
};

export const ThirdPartyFilter = props => (
  <Dropdown text="Third Parties" options={options} onChange={props.sortByLocation} style={style} icon={null} />
);

// Uncomment when UX/UI process is completed for this
// export const ThirdPartyFilter = props => (
//   <Dropdown text="Third Parties">
//     <Menu vertical>
//       {props.thirdParties.map(thirdParty => {
//         return (
//           <Dropdown text={thirdParty.name} pointing="left" className="link item">
//             <Dropdown.Menu>
//               <Dropdown.Item>Online</Dropdown.Item>
//               <Dropdown.Item>Offline</Dropdown.Item>
//             </Dropdown.Menu>
//           </Dropdown>
//         );
//       })}
//     </Menu>
//   </Dropdown>
// );
