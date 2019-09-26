import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import Header from "../../components/Header";
import { Container } from "react-bootstrap";

import data from "../../data/seed";
import MenusTab from "../../components/MenuCreationTabs/MenusTab";
import CategoriesTab from "../../components/MenuCreationTabs/CategoriesTab";
import ItemsTab from "../../components/MenuCreationTabs/ItemsTab";
import ModifierGroupsTab from "../../components/MenuCreationTabs/ModifierGroupsTab";
import ModifiersTab from "../../components/MenuCreationTabs/ModifiersTab";
import "./MenuCreation.css";

const RenderArea = styled.div`
  display: flex;
`;

const style = {
  paddingLeft: "0"
};

class MenuCreation extends React.Component {
  state = data;

  // Ordering Logic

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    console.log(result);

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.draggableId && destination.index === source.index) {
      return;
    }

    if (type === "menus") {
      const new_order = Array.from(this.state.menu_order);
      new_order.splice(source.index, 1);
      new_order.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        menu_order: new_order
      };
      this.setState(newState);
    }
    if (type === "categories") {
      const new_order = Array.from(this.state.category_order);
      new_order.splice(source.index, 1);
      new_order.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        category_order: new_order
      };
      this.setState(newState);
    }

    if (type === "items") {
      const new_order = Array.from(this.state.items_order);
      new_order.splice(source.index, 1);
      new_order.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        items_order: new_order
      };
      this.setState(newState);
    }

    if (type === "modifier_groups") {
      const new_order = Array.from(this.state.modifier_groups_order);
      new_order.splice(source.index, 1);
      new_order.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        modifier_groups_order: new_order
      };
      this.setState(newState);
    }

    if (type === "modifiers") {
      const new_order = Array.from(this.state.modifiers_order);
      new_order.splice(source.index, 1);
      new_order.splice(destination.index, 0, draggableId);
      const newState = {
        ...this.state,
        modifiers_order: new_order
      };
      this.setState(newState);
    }
  };

  render() {
    return (
      <div>
        <Header />
        <Container className="pt-5">
          <h2 className="pt-5">Menu Creation</h2>
          <div className="hero-divider py-1" />

          <Tabs>
            <TabList>
              <Tab style={style}>Menus</Tab>
              <Tab>Categories</Tab>
              <Tab>Items</Tab>
              <Tab>Modifier Groups</Tab>
              <Tab>Modifiers</Tab>
            </TabList>
            <DragDropContext onDragEnd={this.onDragEnd}>
              <TabPanel>
                <MenusTab data={this.state} />
              </TabPanel>
              <TabPanel>
                <CategoriesTab data={this.state} />
              </TabPanel>
              <TabPanel>
                <ItemsTab data={this.state} />
              </TabPanel>
              <TabPanel>
                <ModifierGroupsTab data={this.state} />
              </TabPanel>
              <TabPanel>
                <ModifiersTab data={this.state} />
              </TabPanel>
            </DragDropContext>
          </Tabs>
        </Container>
      </div>
    );
  }
}

export default MenuCreation;
