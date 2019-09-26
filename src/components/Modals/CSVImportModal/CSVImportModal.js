import React from "react";

//Bootstrap Imports
import { Container, Row, Col, Modal, InputGroup, FormControl, Button } from "react-bootstrap";
import { CloseButton } from "../../Buttons";
import { Edit } from "../../Icons";

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
  }
};

class CSVImportModal extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.showSaved = this.showSaved.bind(this);
    this.gotIt = this.gotIt.bind(this);

    this.state = {
      show: false,
      name: props.name,
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
        <div className="d-flex ml-4 mt-2 cursor-pointer" onClick={this.handleShow}>
          <a>
            <i className="fas fa-file-csv"></i> Import CSV
          </a>
        </div>

        <Modal show={this.state.show} onHide={this.handleClose} centered>
          <Modal.Header className="bg-gray">
            <h2 className="pt-3">
              Import CSV: <span style={style.itemName}>{this.props.modalTitle}</span>
            </h2>
            <CloseButton handleClose={this.handleClose} />
          </Modal.Header>
          <Modal.Body className="pt-5" style={style.modalBody}>
            <Row>
              <Col xs="3">
                <Button variant="secondary" size="sm" bsPrefix="sv-btn" onClick={this.showSaved}>
                  Choose File
                </Button>
              </Col>
              <Col xs="9">
                <div>
                  <InputGroup size="lg" className="pb-3">
                    <FormControl
                      value={this.state.name}
                      name="name"
                      onChange={this.handleInputChange}
                      placeholder="No file chosen yet"
                      aria-label="name"
                      style={style.formControl}
                    />
                  </InputGroup>
                </div>
                <div>
                  <label className="close-all-day mt-2">
                    Replace All
                    <input type="checkbox"></input>
                    <span className="checkmark"></span>
                  </label>
                </div>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer style={style.modalFooter}>
            <Button variant="primary" onClick={this.showSaved}>
              Import
            </Button>
          </Modal.Footer>
        </Modal>

        <Modal show={this.state.showSaved} onHide={this.handleClose} centered>
          <Modal.Header />
          <Modal.Body className="text-center">
            <Modal.Title>Sorry!</Modal.Title>
            This is just a prototype. File cannot be uploaded at this time.
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

export default CSVImportModal;
