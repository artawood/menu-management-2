import React from "react";
import { Droppable, Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import ItemCard from "../ItemCard";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
  width: 305px;
  height: 600px;
  background-color: ${props =>
    props.isDraggingOver ? "lightgrey" : "#f6f6f6"};
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  padding: 8px;
  background-color: ${props =>
    props.isDraggingOver ? "lightgrey" : "#f6f6f6"};
`;
const ItemList = styled.div`
  padding: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props =>
    props.isDraggingOver ? "lightgrey" : "#f6f6f6"};
  flex-grow: 1;
  min-height: 100px;
  overflow: scroll;
`;

class MenuSection extends React.Component {
  render() {
    return (
      <Draggable draggableId={this.props.section.id} index={this.props.index}>
        {provided => (
          <Container
            {...provided.draggableProps}
            innerRef={provided.innerRef}
            ref={provided.innerRef}
          >
            <Title {...provided.dragHandleProps}>
              {this.props.section.title}
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
