import React, { Component } from "react";

class Disease extends Component {
  render() {
    const { disease } = this.props;
    return (
      <div className="card-body bg-light">
        <h5 className="card-title">disease name: {disease.name}</h5>
        <h5 className="card-title">disease result: {disease.sick.toString()}</h5>
        <div />
      </div>
    );
  }
}

Disease.propTypes = {};

export default Disease;