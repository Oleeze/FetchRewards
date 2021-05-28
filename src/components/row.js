import React, { Component } from "react";

class row extends Component {
  render() {
    return (
      <div>
        <p>{this.props.row.id}</p>
        <p>{this.props.row.name}</p>
      </div>
    );
  }
}

export default row;
