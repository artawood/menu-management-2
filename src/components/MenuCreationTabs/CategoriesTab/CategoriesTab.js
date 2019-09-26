import React from "react";
import { Droppable } from "react-beautiful-dnd";
import { Row, Col } from "react-bootstrap";
import styled from "styled-components";
import MenuSearchBar from "../../MenuSearchBar";
import CategoryCard from "../../MenuCreationCards/CategoryCard";
import { NameFilter, ActionFilter } from "../../Filters";
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

class CategoriesTab extends React.Component {
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
        {this.props.data.category_order.map((id, index) => {
          let object = this.props.data.categories[id];
          if (object.name.toLowerCase().indexOf(this.state.filterText.toLowerCase()) === -1) {
            return;
          }
          return <CategoryCard key={index} object={object} index={index} style={style} />;
        })}
      </div>
    );
    return (
      <div>
        <div className="d-flex">
          <MenuSearchBar
            placeholder={"Search for Categories"}
            filterText={this.state.filterText}
            onUserInput={this.handleUserInput.bind(this)}
          />
          <MenuCreationCreateNewModal modalTitle="Create New Category" />
          <CSVImportModal modalTitle="Categories" />
        </div>
        <Row className="pb-3">
          <Col xs="3" lg="2">
            <NameFilter text={"Category Name"} />
          </Col>
          <Col xs="3" lg="3"></Col>
          <Col xs="3" lg="4">
            <ActionFilter />
          </Col>
          <Col xs="3"></Col>
        </Row>
        <Droppable droppableId="categories" direction="vertical" type="categories">
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

export default CategoriesTab;
