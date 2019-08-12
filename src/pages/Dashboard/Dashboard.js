import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import styled from "styled-components";
import { Container } from "react-bootstrap";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import SidebarContent from "../../components/SidebarContent";
import Hero from "../../components/Hero";
import MenuSection from "../../components/MenuSection";

import data from "../../models/data.js";

const Section = styled.div`
  display: flex;
`;

class Dashboard extends React.Component {
  state = data;

  // Ordering logic
  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;

    if (!destination) {
      return;
    }

    if (destination.droppableId === source.draggableId && destination.index === source.index) {
      return;
    }

    if (type === "column") {
      const newSectionOrder = Array.from(this.state.menuSectionOrder);
      newSectionOrder.splice(source.index, 1);
      newSectionOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        menuSectionOrder: newSectionOrder
      };

      this.setState(newState);
      return;
    }
    const start = this.state.menu_sections[source.droppableId];
    const finish = this.state.menu_sections[destination.droppableId];

    if (start === finish) {
      //Persist list Reordering
      // Create new array of the new order
      const newItemIds = Array.from(start.menu_items);
      // Remove an item from the array
      newItemIds.splice(source.index, 1);
      newItemIds.splice(destination.index, 0, draggableId);

      // new section
      const newSection = {
        ...start,
        menu_items: newItemIds
      };

      const newState = {
        ...this.state,
        menu_sections: {
          ...this.state.menu_sections,
          [newSection.id]: newSection
        }
      };

      this.setState(newState);
      return;
    }
    // Moving from one list from one column to another
    const startItemIds = Array.from(start.menu_items);
    startItemIds.splice(source.index, 1);
    const newStart = {
      ...start,
      menu_items: startItemIds
    };

    const finishItemIds = Array.from(finish.menu_items);
    finishItemIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      menu_items: finishItemIds
    };

    const newState = {
      ...this.state.data,
      menu_sections: {
        ...this.state.menu_sections,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      }
    };
    this.setState(newState);
  };

  render() {
    return (
      <div className="App">
        <Header toggleSidebar={this.onSetSidebarDocked} />
        <Sidebar sidebar={<SidebarContent />} docked={true}>
          <Container fluid className="pt-4 pl-6">
            <Hero className="pb-5" title="Menu Management" />
            <Container fluid>
              <DragDropContext className="ml-5" onDragEnd={this.onDragEnd}>
                <Droppable droppableId="all-columns" direction="vertical" type="column">
                  {provided => (
                    <Section
                      {...provided.droppableProps}
                      innerRef={provided.innerRef}
                      ref={provided.innerRef}
                      className="row"
                    >
                      {this.state.menuSectionOrder.map((sectionId, index) => {
                        const section = this.state.menu_sections[sectionId];
                        const items = section.menu_items.map(itemId => this.state.menu_items[itemId]);

                        return (
                          <MenuSection
                            key={section.id}
                            section={section}
                            items={items}
                            index={index}
                            className="col-auto"
                          />
                        );
                      })}
                      {provided.placeholder}
                    </Section>
                  )}
                </Droppable>
              </DragDropContext>
            </Container>
          </Container>
        </Sidebar>
      </div>
    );
  }
}

export default Dashboard;
