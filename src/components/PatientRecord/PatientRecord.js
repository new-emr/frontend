import React, { Component } from "react";
import Feature from "./Feature";
import Disease from "./Disease";

class PatientRecord extends Component {
  render() {
    const { record, featureList, diseaseList } = this.props;

    const features = featureList.map(feature => (
      <Feature key={feature.featureId} feature={feature} />
    ));

    const diseases = diseaseList.map(disease => (
      <Disease key={disease.diseaseId} disease={disease} />
    ));

    return (
      <div className="card mb-1 bg-light">
        <div className="card-header text-primary">ID: {record.id}</div>
        <div className="card-body bg-light">
          <h5 className="card-title">{record.patientName}</h5>
          {features}
          {diseases}
        </div>
      </div>
    );
  }
}

PatientRecord.propTypes = {};

export default PatientRecord;
