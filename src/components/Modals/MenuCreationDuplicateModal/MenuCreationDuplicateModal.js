import React from "react";

//Bootstrap Imports
import { Button, Modal, InputGroup, FormControl, Nav } from "react-bootstrap";
import { CloseButton } from "../../Buttons";
import { DuplicateOutline } from "../../Icons";

const style = {
  itemName: {
    fontStyle: "italic",
    fontWeight: 400
  },
  modalBody: {
    paddingLeft: 25,
    paddingRight: 25
  },
  formControl: {
    fontSize: "1.5rem",
    borderRadius: 0
  },
  modalFooter: {
    paddingBottom: 30,
    paddingLeft: 25,
    paddingRight: 25
  },
  action: {
    color: "#04a89b"
  }
};

class MenuCreationDuplicateModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showSaved = this.showSaved.bind(this);
    this.gotIt = this.gotIt.bind(this);

    this.state = {
      show: false,
      name: this.props.name,
      price: props.price,
      showSaved: false
    };
  }

  handleClose() {
    this.setState({ show: false });
  }

  handleShow() {
    this.setState({ show: true });
  }

  showSaved() {
    this.setState({
      show: false,
      showSaved: true
    });
  }

  gotIt() {
    this.setState({
      name: this.props.name,
      price: this.props.price,
      showSaved: false
    });
  }

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  render() {
    return (
      <div className="mt-1 cursor-pointer">
        <div className="pl-3 d-flex" onClick={this.handleShow}>
          <div>
            <DuplicateOutline fill="#4A4A4A" width="17" />
          </div>
          <div className="pl-2">
            <a style={style.action}>Duplicate</a>
          </div>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="bg-gray">
            <h2 className="pt-3">
              Duplicating {this.props.modalTitle}: <span style={style.itemName}>{this.state.name}</span>
            </h2>
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Body className="pt-5" style={style.modalBody}>
            <h3>Save as:</h3>
            <InputGroup size="lg" className="pb-3">
              <FormControl
                value={`${this.state.name}-2`}
                name="name"
                onChange={this.handleInputChange}
                placeholder="edit name"
                aria-label="name"
                style={style.formControl}
              />
            </InputGroup>
          </Modal.Body>
          <Modal.Footer style={style.modalFooter}>
            <Button variant="primary" onClick={this.showSaved}>
              Save
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showSaved} onHide={this.handleClose} centered>
          <Modal.Header />
          <Modal.Body className="text-center">
            <Modal.Title>Sorry!</Modal.Title>
            This is just a prototype. Data cannot be edited at this time.
          </Modal.Body>
          <Modal.Footer className="mx-auto">
            <Button variant="secondary" onClick={this.gotIt}>
              Got it!
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    );
  }
}

export default MenuCreationDuplicateModal;
