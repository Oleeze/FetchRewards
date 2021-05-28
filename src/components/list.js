import React, { Component } from "react";
import Row from "./row";

class list extends Component {
  render() {
    return (
      <div className="rows hidden">
        <div>
          <h1>ID</h1>
          <h1>Name</h1>
        </div>
        {this.props.list.map((row, id) => {
          return <Row row={row}></Row>;
        })}
      </div>
    );
  }
}

export default list;
