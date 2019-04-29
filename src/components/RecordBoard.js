import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllPatient } from "../actions/patientActions";
import PatientRecord from "./PatientRecord/PatientRecord";

class RecordBoard extends Component {
  componentDidMount() {
    this.props.getAllPatient();
  }
  render() {
    const { patients } = this.props.patients;

    let BoardContent;

    const BoardAlgorithm = patients => {
      if (patients.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No Patient Records on this board
          </div>
        );
      } else {
        const records = patients.map(patient_record => (
          <PatientRecord
            key={patient_record.patientId}
            record={patient_record}
            featureList = {patient_record.featureList}
            diseaseList = {patient_record.diseaseList}
          />
        ));

        return (
          <div className="container">
            <h3>Patient Records</h3>
            {records}
          </div>
        );
      }
    };

    BoardContent = BoardAlgorithm(patients);

    return <div className="container">{BoardContent}</div>;
  }
}

RecordBoard.propTypes = {
  getAllPatient: PropTypes.func.isRequired,
  patients: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  patients: state.patients
});

export default connect(
  mapStateToProps,
  { getAllPatient }
)(RecordBoard);
