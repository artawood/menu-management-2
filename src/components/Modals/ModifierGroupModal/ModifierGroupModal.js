import React from "react";

//Bootstrap Imports
import { Button, Modal, Container } from "react-bootstrap";
import ModalSlider from "react-modal-slider";
import "react-modal-slider/lib/main.css";
import { ChevronRight, Close } from "../../Icons";
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

    this.state = {
      isOpen: false
    };
  }

  toggleVisibleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  };

  render() {
    return (
      <div>
        <div className="d-flex pl-4 mt-1" onClick={this.toggleVisibleModal}>
          <a>({this.props.object.modifier_groups.length}) Modifier Groups </a>
          <ChevronRight fill="#4A4A4A" className="ml-2" width="15" height="15" />
        </div>

        <ModalSlider
          // default false
          isOpen={this.state.isOpen}
          // default 60%
          width={"375px"}
          // default from right
          directionFrom={"right"}
          // default Modal
          contentLabel={"Demo Modal"}
          onRequestClose={this.toggleVisibleModal}
          // optional for accessibility
          setAppElement={"#root"}
          // default false allows you to skip setAppElement prop for react-modal
          ariaHideApp={true}
          // allow you to set the maximum width of the viewport
          // at which the modal will be expanded to full screen
          maxMediaWidth={1024}
          // allows you to decorate a className or overlayClassName
          className={"shift-down"}
          overlayClassName={"string"}
        >
          <Modal.Header>
            <Modal.Title>{this.props.object.name}</Modal.Title>
            <div
              className="close-btn-modal"
              onClick={() => {
                this.toggleVisibleModal();
                this.props.handleDraggable();
              }}
            >
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">
                  <Close width="32" height="32" />
                </span>
              </button>
            </div>
          </Modal.Header>
          <Modal.Body style={style.list}>
            <h3>({this.props.object.modifier_groups.length}) Modifier Groups</h3>
            <div className="d-flex mb-3">
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
            <Button
              variant="primary"
              onClick={() => {
                this.toggleVisibleModal();
                this.props.handleDraggable();
              }}
            >
              Save
            </Button>
          </Modal.Footer>
        </ModalSlider>
      </div>
    );
  }
}

export default ModifierGroupModal;
