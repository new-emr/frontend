import React, { Component } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Feature from "./Feature";
import Disease from "./Disease";

class RecordPopUp extends Component {
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
  }

  render() {
    const { featureList, diseaseList } = this.props;

    const features = featureList.map(feature => (
      <Feature key={feature.featureId} feature={feature} />
    ));

    const diseases = diseaseList.map(disease => (
      <Disease key={disease.diseaseId} disease={disease} />
    ));

    return (
      <>
        <Button variant="primary" onClick={this.handleShow}>
          Record Detail
        </Button>

        <Modal show={this.state.show} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Record Detail</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {features}
            {diseases}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={this.handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}

export default RecordPopUp;
