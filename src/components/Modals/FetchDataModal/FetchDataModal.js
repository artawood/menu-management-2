import React from "react";

//Bootstrap Imports
import Modal from "react-bootstrap/Modal";
import { Fetch } from "../../Icons";

const style = {
  modalTitle: {
    padding: "50px 0px 0px 0px",
    textAlign: "center"
  },
  pointer: {
    cursor: "pointer"
  }
};

class FetchDataModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);

    this.state = {
      show: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
    setTimeout(() => {
      this.setState({ show: false });
    }, 3000);
  }

  render() {
    return (
      <div>
        <li className="nav-item hover" onClick={this.handleShow}>
          <p className="nav-link ml-4" style={style.pointer}>
            <span data-feather="fetch-data">
              <Fetch width="30" height="30" className="pr-2" />
            </span>
            Fetch Data
          </p>
        </li>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Title style={style.modalTitle}>Fetching latest data</Modal.Title>
          <Modal.Body className="text-center py-2">
            <img src="https://media.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif" alt="fetching" />
          </Modal.Body>
        </Modal>
      </div>
    );
  }
}

export default FetchDataModal;
