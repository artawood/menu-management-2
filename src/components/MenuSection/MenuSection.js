import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import { Row, Col, Dropdown } from "react-bootstrap";
import styled from "styled-components";
import ItemCard from "../ItemCard";
import CustomDropdown from "../CustomDropdown";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 305px;
  height: 600px;
  background-color: ${props => (props.isDraggingOver ? "lightgrey" : "#f6f6f6")};
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 5px;
  background-color: ${props => (props.isDraggingOver ? "lightgrey" : "#f6f6f6")};
`;
const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDraggingOver ? "lightgrey" : "#f6f6f6")};
  flex-grow: 1;
  min-height: 100px;
  overflow: scroll;
`;

class MenuSection extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.section.id} index={this.props.index} isDragDisabled={true}>
        {provided => (
          <Container {...provided.draggableProps} innerRef={provided.innerRef} ref={provided.innerRef}>
            <Title {...provided.dragHandleProps}>
              <Row className="pt-2">
                <Col sm="9">
                  <div className="pl-1">
                    <h3>{this.props.section.title}</h3>
                  </div>
                </Col>
                <Col sm="3" className="text-right">
                  <div className="px-2">
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
                  </div>
                </Col>
              </Row>
            </Title>
            <Droppable droppableId={this.props.section.id} type="task">
              {(provided, snapshot) => (
                <ItemList
                  innerRef={provided.innerRef}
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  isDraggingOver={snapshot.isDraggingOver}
                >
                  {this.props.items.map((item, index) => (
                    <ItemCard key={item.id} item={item} index={index} />
                  ))}
                  {provided.placeholder}
                </ItemList>
              )}
            </Droppable>
          </Container>
        )}
      </Draggable>
    );
  }
}

export default MenuSection;
