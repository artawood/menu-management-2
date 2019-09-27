import React from "react";

//Bootstrap Imports
import { Button, Modal, Container } from "react-bootstrap";
import { ChevronRight } from "../../Icons";
import "./ModifierGroupModal.css";
import DetailCard from "../../MenuCreationCards/DetailCard";
import ModifierGroupSelector from "../../ModifierGroupSelector";

const style = {
  list: {
    width: "375px"
  },
  btn: {
    minWidth: "80px",
    fontSize: "20px",
    height: "38px"
  }
};

class ModifierGroupModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false,
      showClassName: "hide"
    };
  }

  handleClose() {
    this.setState({ show: false, showClassName: "hide" });
    this.props.handleDraggable();
  }

  handleShow() {
    this.setState({ show: true, showClassName: "show" });
  }

  render() {
    return (
      <div>
        <div className="d-flex pl-4 mt-1" onClick={this.handleShow}>
          <a>({this.props.object.modifier_groups.length}) Modifier Groups </a>
          <ChevronRight fill="#4A4A4A" className="ml-2" width="15" />
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} className={`side-modal ${this.state.showClassName}`}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.object.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body style={style.list}>
            <h3>({this.props.object.modifier_groups.length}) Modifier Groups</h3>
            <div className="d-flex mb-3">
              {/* identified bug */}
              <ModifierGroupSelector
                data={this.props.data.modifier_groups}
                placeholder={"Select Modifier"}
                className="modifier-group-selector"
              />
              <Button variant="secondary" size="sm" className="ml-2" style={style.btn}>
                Add
              </Button>
            </div>
            <Container>
              {this.props.object.modifier_groups.map((id, index) => {
                let object = this.props.data.modifier_groups[id];
                return <DetailCard key={index} object={object} />;
              })}
            </Container>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default ModifierGroupModal;
