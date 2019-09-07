import React from "react";
import { Dropdown } from "react-bootstrap";
import CustomDropdown from "../CustomDropdown";

const CategoryDropdown = () => (
  <Dropdown alignRight>
    <Dropdown.Toggle as={CustomDropdown}>
      <i className="fas fa-ellipsis-h" />
    </Dropdown.Toggle>
    <Dropdown.Menu>
      <Dropdown.Item>Add Item</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item>Delete Category</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>
);

export default CategoryDropdown;
