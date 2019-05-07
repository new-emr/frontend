import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

class AddRecord extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "type1",
      features: []
    };
  }

  render() {
    const RecordForm = (
      <Form>
        <Form.Group controlId="formPatientName">
          <Form.Label>Patient Name</Form.Label>
          <Form.Control type="name" placeholder="Enter patient name" />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    );

    const Type1FeatureList = (
      <div style={{ margin: 4 }}>
        <InputGroup className="mb-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox />
          </InputGroup.Prepend>
          <FormControl value="F1" />
        </InputGroup>
        <InputGroup className="mb-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox />
          </InputGroup.Prepend>
          <FormControl value="F2" />
        </InputGroup>
      </div>
    );

    const Type2FeatureList = (
      <div style={{ margin: 4 }}>
        <InputGroup className="mb-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox />
          </InputGroup.Prepend>
          <FormControl value="F3" />
        </InputGroup>
        <InputGroup className="mb-1">
          <InputGroup.Prepend>
            <InputGroup.Checkbox />
          </InputGroup.Prepend>
          <FormControl value="F4" />
        </InputGroup>
      </div>
    );

    const FeatureListTab = (
      <Tabs
        id="nav-tab"
        activeKey={this.state.key}
        onSelect={key => this.setState({ key })}
      >
        <Tab eventKey="type1" title="Type1">
          {Type1FeatureList}
        </Tab>
        <Tab eventKey="type2" title="Type2">
          {Type2FeatureList}
        </Tab>
        <Tab eventKey="type3" title="Type3" disabled />
      </Tabs>
    );

    const RecordCard = (
      <div className="card mb-1 bg-light" style={{ margin: 8, flexGrow: 2 }}>
        <div className="card-header text-primary">Record</div>
        <div className="card-body bg-light">{RecordForm}</div>
      </div>
    );

    const FeatureListCard = (
      <div className="card mb-1 bg-light" style={{ margin: 8, flexGrow: 1 }}>
        <div className="card-header text-primary">Feature List</div>
        <div className="card-body bg-light">{FeatureListTab}</div>
      </div>
    );

    return (
      <div className="container">
        <h3>Add Record</h3>
        <div className="flex-container" style={{ display: "flex" }}>
          {FeatureListCard}
          {RecordCard}
        </div>
      </div>
    );
  }
}

export default AddRecord;
