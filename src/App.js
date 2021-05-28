import React from "react";
import axios from "axios";

import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    axios
      .get("/data")
      .then((response) => {
        this.setState({ data: JSON.stringify(response.data) });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  render() {
    return (
      <div className="App">
        <h1>Data</h1>
        <p>{this.state.data}</p>
      </div>
    );
  }
}

export default App;
