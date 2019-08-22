import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Card, Row, Col, Dropdown, OverlayTrigger, Tooltip } from "react-bootstrap";
import { Link } from "react-router-dom";
import SoldOutSwitch from "../Togglers/ToggleSoldOut";
import SoldOutDayDropdown from "../SoldOutDayDropdown";
import SoldOutDuration from "../SoldOutDuration";
import { Edit, Warning } from "../Icons";
import CustomDropdown from "../CustomDropdown";
import styled from "styled-components";
//Uncomment if using thes features
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
              <Row className="">
                <Col sm="10" className="item-name-card">
                  {this.props.item.name}
                </Col>
                <Col sm="2">
                  <Dropdown alignRight>
                    <Dropdown.Toggle as={CustomDropdown}>
                      <i class="fas fa-ellipsis-h" />
                    </Dropdown.Toggle>
                    <Dropdown.Menu>
                      <Dropdown.Item eventKey="1">
                        <Link to={"/itemdetails/" + this.props.item.id}>See Details</Link>
                      </Dropdown.Item>
                      <Dropdown.Divider />
                      <Dropdown.Item eventKey="2">Delete Item</Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </Col>
              </Row>
              <Row>
                <Col xs="12">
                  <Row className="pl-3 pt-1 pb-1">
                    <div className="item-price-card pr-2">$ {this.props.item.price}</div>
                  </Row>
                </Col>
              </Row>
            </Card.Body>
            <Card.Footer>
              <Row>
                <Col xs="12">
                  <div className="d-flex">
                    <div className="d-flex mt-2">
                      <SoldOutSwitch enabled={this.props.item.soldOut ? false : true} className="pr-2" />
                    </div>
                    {!this.props.item.soldOut ? null : this.props.item.scheduled ? (
                      <div className="d-flex" onMouseEnter={this.handleMouseHover} onMouseLeave={this.handleMouseHover}>
                        <SoldOutDuration soldOutDuration={this.props.item.scheduledFor} />
                        <div className="">
                          <Edit className="pl-2" onClick={this.toggleEditSoldOutSchedule} />
                        </div>
                      </div>
                    ) : (
                      <SoldOutDayDropdown />
                    )}
                    {this.props.modifierSoldOut && !this.props.item.soldOut ? (
                      <OverlayTrigger
                        placement="right"
                        overlay={<Tooltip>At least one or more modifiers in this item is sold out.</Tooltip>}
                      >
                        <div>
                          <Warning width="20px" height="20px" className="mt-2" />
                        </div>
                      </OverlayTrigger>
                    ) : null}
                  </div>
                </Col>
                {/* <Col xs="4" className="text-right">
                  <Link className="see-details" to={"/itemdetails/" + this.props.item.id}>
                    See Details
                  </Link>
                </Col> */}
              </Row>
            </Card.Footer>
          </Card>
        )}
      </Draggable>
    );
  }
}

export default ItemCard;
