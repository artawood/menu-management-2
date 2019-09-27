import React from "react";
import { Redirect, Link } from "react-router-dom";
//Bootstrap Imports
import { Modal, Button } from "react-bootstrap";
import { TrashOutline } from "../../Icons";

const style = {
  action: {
    color: "#04a89b"
  }
};

class CancelSaveModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleCancel = this.handleCancel.bind(this);

    this.state = {
      show: false,
      cancel: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  handleCancel() {
    this.setState({
      cancel: true
    });
  }

  render() {
    return (
      <div>
        <div className="pl-3 d-flex mt-1 cursor-pointer" onClick={this.handleShow}>
          <div>
            <TrashOutline fill="#4A4A4A" width="27" fill="#4A4A4A" className="pr-2" />
          </div>
          <div>
            <a style={style.action}>Delete</a>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="text-center" closeButton />
          <Modal.Body>
            <Modal.Title className="text-center px-5">
              Are you sure you want to delete {this.props.itemToDelete}?
            </Modal.Title>
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button variant="danger" onClick={this.handleCancel}>
              Delete
            </Button>
            <Button variant="outline-secondary" onClick={this.handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default CancelSaveModal;
