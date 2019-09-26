import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Row, Col, Card } from "react-bootstrap";
import { Clock, Trash } from "../../Icons";
import styles from "./MenuCard.module.css";
import MenuCreationEditMenuNameModal from "../../Modals/MenuCreationEditMenuNameModal";
import ModifierGroupModal from "../../Modals/ModifierGroupModal";

const style = {
  card: {
    fontSize: "16px",
    overflow: "visible"
  },
  cardBody: {
    width: "1140px"
  },
  thirdPartyRow: {
    paddingLeft: "15px"
  },
  action: {
    color: "#04a89b"
  }
};

//var for adjusting responsive with conditional rendering
const windowInnerWidth = window.innerWidth;

class ItemCard extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Draggable draggableId={this.props.object.id} index={this.props.index} style={style.cardBody}>
        {(provided, snapshot) => (
          <Card {...provided.draggableProps} ref={provided.innerRef} {...provided.dragHandleProps} className="mb-2">
            <Card.Body style={style.cardBody}>
              <Row className="pb-1">
                <Col xs="3" lg="2" className="pr-0">
                  <div className="mt-1">
                    <Card.Title style={style.card}>{this.props.object.name}</Card.Title>
                  </div>
                </Col>
                <Col xs="3" lg="3"></Col>
                <Col xs="3" lg="4">
                  <div className="d-flex">
                    <span className={styles.divider} />
                    <MenuCreationEditMenuNameModal modalTitle={"Edit Item Name"} name={this.props.object.name} />
                    <div className="pl-3 d-flex mt-1">
                      <div>
                        <Clock width="30" height="30" fill="#4A4A4A" className="pr-2" />
                      </div>
                      <div>
                        <a style={style.action}>Duplicate</a>
                      </div>
                    </div>
                    <div className="pl-3 d-flex mt-1">
                      <div>
                        <Trash width="30" height="30" fill="#4A4A4A" className="pr-2" />
                      </div>
                      <div>
                        <a style={style.action}>Delete</a>
                      </div>
                    </div>
                  </div>
                </Col>
                <Col xs="3">
                  <div className="d-flex">
                    <span className={styles.divider} />
                    <ModifierGroupModal data={this.props.data} object={this.props.object} />
                  </div>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Draggable>
    );
  }
}

export default ItemCard;
