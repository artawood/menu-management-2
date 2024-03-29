import React from "react";

//Bootstrap Imports
import { Button, Modal, InputGroup, FormControl, Nav } from "react-bootstrap";
import { CloseButton } from "../../Buttons";

const style = {
  itemName: {
    fontStyle: "italic",
    fontWeight: 400
  },
  newText: {
    fontSize: "18px"
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

class MenuCreationEditMenuNameModal extends React.Component {
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
      <div>
        <div className="d-flex ml-4 mt-1 cursor-pointer" onClick={this.handleShow}>
          <a>
            <span style={style.newText}>
              <i className="fas fa-plus"></i> New
            </span>
          </a>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="bg-gray">
            <h2 className="pt-3">
              {this.props.modalTitle}: <span style={style.itemName}>{this.state.name}</span>
            </h2>
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Body className="pt-5" style={style.modalBody}>
            <InputGroup size="lg" className="pb-3">
              <FormControl
                value={this.state.name}
                name="name"
                onChange={this.handleInputChange}
                placeholder={this.props.modalTitle}
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

export default MenuCreationEditMenuNameModal;
