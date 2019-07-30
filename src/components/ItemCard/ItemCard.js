import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import SoldOutSwitch from "../ToggleSoldOut";
import styled from "styled-components";
//Uncomment if using thes features
// import { Link } from "react-router-dom";
// import { Card, Row, Col } from "react-bootstrap";
// import SoldOutSwitch from "../ToggleSoldOut";
// import EditItemNameModal from "../Modals/EditItemNameModal";
// import EditItemPriceModal from "../Modals/EditItemPriceModal";
// import RemoveItemModal from "../Modals/RemoveItemModal";

//Custom CSS
import "./ItemCard.css";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
  transition: background-color 0.2s ease;
  background-color: ${props => (props.isDragging ? "lightblue" : "white")};
  display: flex;
`;

class ItemCard extends React.Component {
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleSoldOut() {
    {
      this.state.soldOut
        ? this.setState({
            soldOut: false,
            soldOutClass: ""
          })
        : this.setState({
            soldOut: true,
            soldOutClass: "soldOut"
          });
    }
  }
  render() {
    return (
      <Draggable draggableId={this.props.item.id} index={this.props.index}>
        {(provided, snapshot) => (
          <Card
            className="item-card"
            {...provided.draggableProps}
            innerRef={provided.innerRef}
            ref={provided.innerRef}
            isDragging={snapshot.isDragging}
            {...provided.dragHandleProps}
          >
            <Card.Body>
              <Row className="pl-3 pb-1">
                <div className="item-name-card pr-2">
                  {this.props.item.name}
                </div>
              </Row>
              <Row>
                <Col xs={"12"}>
                  <Row className="pl-3 pt-1 pb-1">
                    <div className="item-price-card pr-2">
                      $ {this.props.item.price}
                    </div>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col xs="7">
                  <div className="d-flex mt-2">
                    <SoldOutSwitch
                      enabled={this.props.item.soldOut ? false : true}
                      className="pr-2"
                    />
                  </div>
                </Col>
                <Col xs="5">
                  <Link
                    className="see-details"
                    to={"/itemdetails/" + this.props.item.id}
                  >
                    See Details
                  </Link>
                </Col>
              </Row>
            </Card.Footer>
          </Card>
        )}
      </Draggable>
    );
  }
}

export default ItemCard;
