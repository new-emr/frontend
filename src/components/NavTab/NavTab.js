import React, { Component } from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import PatientRecord from "../PatientRecord/PatientRecord";
import RecordBoard from "../RecordBoard";
import AddRecord from "../PatientRecord/AddRecord";
import AnalysisBoard from "../AnalysisBoard";

class NavTab extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      key: "records"
    };
  }

  render() {
    return (
      <div className="container">
        <Tabs
          id="nav-tab"
          activeKey={this.state.key}
          onSelect={key => this.setState({ key })}
        >
          <Tab eventKey="records" title="All Records">
            <RecordBoard />
          </Tab>
          <Tab eventKey="add" title="Add Record">
            <AddRecord />
          </Tab>
          <Tab eventKey="analysis" title="Analysis">
            <AnalysisBoard />
          </Tab>
          <Tab eventKey="reports" title="Reports" disabled />
          <Tab eventKey="help" title="Help" disabled />
        </Tabs>
      </div>
    );
  }
}

export default NavTab;
