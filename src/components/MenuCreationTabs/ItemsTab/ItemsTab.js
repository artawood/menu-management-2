import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MenuSearchBar from "../../MenuSearchBar";
import ItemCard from "../../MenuCreationCards/ItemCard";
import { NameFilter, ActionFilter, ModifierFilter } from "../../Filters";
import MenuCreationCreateNewModal from "../../Modals/MenuCreationCreateNewModal";
import CSVImportModal from "../../Modals/CSVImportModal/CSVImportModal";

const RenderArea = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const style = {
  width: "1140px"
};

class ItemsTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {this.props.data.items_order.map((id, index) => {
          let object = this.props.data.items[id];
          if (object.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) {
            return;
          }
          return <ItemCard key={index} data={this.props.data} object={object} index={index} style={style} />;
        })}
      </div>
    );
    return (
      <div>
        <div className="d-flex">
          <MenuSearchBar
            placeholder={"Search for Items"}
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput.bind(this)}
          />
          <MenuCreationCreateNewModal modalTitle="Create New Item" />
          <CSVImportModal modalTitle="Items" />
        </div>

        <Row className="pb-3">
          <Col xs="3" lg="2">
            <NameFilter text={"Item Name"} />
          </Col>
          <Col xs="3" lg="3"></Col>
          <Col xs="3" lg="4">
            <ActionFilter />
          </Col>
          <Col xs="3">
            <ModifierFilter text={"Modifier Groups"} />
          </Col>
        </Row>
        <Droppable droppableId="items" direction="vertical" type="items">
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

export default ItemsTab;
