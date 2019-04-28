import React, { Component } from "react";

class Feature extends Component {
  render() {
    const { feature } = this.props;
    return (
      <div className="card-body bg-light">
        <h5 className="card-title">feature name: {feature.name}</h5>
        <h5 className="card-title">feature result: {feature.result}</h5>
        <div />
      </div>
    );
  }
}

Feature.propTypes = {};

export default Feature;
