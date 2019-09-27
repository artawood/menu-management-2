import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Row, Col, Card } from "react-bootstrap";
import { DuplicateOutline } from "../../Icons";
import styles from "./MenuCard.module.css";
import MenuCreationEditMenuNameModal from "../../Modals/MenuCreationEditMenuNameModal";
import MenuCreationDuplicateModal from "../../Modals/MenuCreationDuplicateModal";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal";

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

class ModifierCard extends React.Component {
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
                    <MenuCreationEditMenuNameModal modalTitle={"Edit Modifier Name"} name={this.props.object.name} />
                    <MenuCreationDuplicateModal modalTitle={"Modifier"} name={this.props.object.name} />
                    <ConfirmDeleteModal itemToDelete={this.props.object.name} />
                  </div>
                </Col>
                <Col xs="3"></Col>
              </Row>
            </Card.Body>
          </Card>
        )}
      </Draggable>
    );
  }
}

export default ModifierCard;
