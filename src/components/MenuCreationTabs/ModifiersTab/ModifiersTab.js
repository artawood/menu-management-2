import React from "react";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MenuSearchBar from "../../MenuSearchBar";
import ModifierCard from "../../MenuCreationCards/ModifierCard";
import { NameFilter, ActionFilter, ModifierFilter } from "../../Filters";
import MenuCreationCreateNewModal from "../../Modals/MenuCreationCreateNewModal";
import CSVImportModal from "../../Modals/CSVImportModal/CSVImportModal";

const RenderArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const style = {
  card: {
    width: "1140px"
  },
  iconText: {
    fontWeight: "500",
    color: "#4A4A4A"
  }
};

class ModifiersTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data,
      filterText: "",
      visible: true,
      sortByOnline: false
    };
  }
  handleUserInput(filterText) {
    this.setState({ filterText: filterText });
  }

  render() {
    let content = (
      <div className="container">
        {/* modify here for rendering data */}
        {this.props.data.modifiers_order.map((id, index) => {
          let object = this.props.data.modifiers[id];
          if (object.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) {
            return;
          }
          return <ModifierCard key={index} object={object} index={index} style={style.card} />;
        })}
      </div>
    );
    return (
      <div>
        <div className="d-flex">
          <MenuSearchBar
            placeholder={"Search for Modifiers"}
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput.bind(this)}
          />
          <MenuCreationCreateNewModal modalTitle="Create New Modifier" />
          <CSVImportModal modalTitle="Modifiers" />
        </div>
        <Row className="pb-3">
          <Col xs="3" lg="2">
            <NameFilter text={"Modifier Name"} />
          </Col>
          <Col xs="3" lg="3"></Col>
          <Col xs="3" lg="4">
            <ActionFilter />
          </Col>
          <Col xs="3"></Col>
        </Row>
        <Droppable droppableId="modifiers" direction="vertical" type="modifiers">
          {provided => (
            <RenderArea {...provided.droppableProps} innerRef={provided.innerRef} ref={provided.innerRef}>
              {content}
              {provided.placeholder}
            </RenderArea>
          )}
        </Droppable>
      </div>
    );
  }
}

export default ModifiersTab;
