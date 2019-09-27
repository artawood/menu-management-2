import React from "react";
import { Draggable } from "react-beautiful-dnd";
import { Row, Col, Card } from "react-bootstrap";
import styles from "./MenuCard.module.css";
import MenuCreationEditMenuNameModal from "../../Modals/MenuCreationEditMenuNameModal";
import MenuCreationDuplicateModal from "../../Modals/MenuCreationDuplicateModal";
import ConfirmDeleteModal from "../../Modals/ConfirmDeleteModal";
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

    this.state = {
      isDragDisabled: false
    };
  }

  //Disable draggable while modal appears
  disableDraggable = () => {
    this.setState({
      isDragDisabled: true
    });
  };

  handleDraggable = () => {
    this.setState({
      isDragDisabled: false
    });
  };

  render() {
    return (
      <Draggable
        draggableId={this.props.object.id}
        index={this.props.index}
        style={style.cardBody}
        isDragDisabled={this.state.isDragDisabled}
      >
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
                    <MenuCreationDuplicateModal modalTitle={"Item"} name={this.props.object.name} />
                    <ConfirmDeleteModal itemToDelete={this.props.object.name} />
                  </div>
                </Col>
                <Col xs="3">
                  <div className="d-flex">
                    <span className={styles.divider} />
                    <div onClick={this.disableDraggable}>
                      <ModifierGroupModal
                        handleDraggable={this.handleDraggable}
                        data={this.props.data}
                        object={this.props.object}
                      />
                    </div>
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
