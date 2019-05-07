import React, { Component } from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { getAllPatient } from "../actions/patientActions";
import PatientRecord from "./PatientRecord/PatientRecord";
import Table from "react-bootstrap/Table";
import RecordPopUp from "./PatientRecord/RecordPopUp";

class RecordBoard extends Component {
  componentDidMount() {
    this.props.getAllPatient();
  }

  render() {
    const { patients } = this.props.patients;

    const TableHeader = (
      <thead>
        <tr>
          <th>#</th>
          <th>Patient Name</th>
          <th>Time Stamp</th>
          <th>Detail</th>
        </tr>
      </thead>
    );

    let BoardContent;

    const BoardAlgorithm = patients => {
      if (patients.length < 1) {
        return (
          <div className="alert alert-info text-center" role="alert">
            No Patient Records on this board
          </div>
        );
      } else {
        // const records = patients.map(patient_record => (
        //   <PatientRecord
        //     key={patient_record.id}
        //     record={patient_record}
        //     featureList={patient_record.featureList}
        //     diseaseList={patient_record.diseaseList}
        //   />
        // ));

        const RecordsTableBody = patients.map(patient_record => (
          <tr>
            <td>{patient_record.id}</td>
            <td>{patient_record.patientName}</td>
            <td>time stamp</td>
            <td>
              <RecordPopUp
                featureList={patient_record.featureList}
                diseaseList={patient_record.diseaseList}
              />
            </td>
          </tr>
        ));

        const RecordsTable = (
          <Table striped bordered hover>
            {TableHeader}
            <tbody>{RecordsTableBody}</tbody>
          </Table>
        );

        return (
          <div className="container">
            <h3>Patient Records</h3>
            <div>{RecordsTable}</div>
            {/*
              <div>{records}</div>
            */}
          </div>
        );
      }
    };

    BoardContent = BoardAlgorithm(patients);

    return <div>{BoardContent}</div>;
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
