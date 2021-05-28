import React from "react";
import axios from "axios";
import Test from "./components/list";
import "./App.css";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      data: [],
    };

    this.toggleStyle = this.toggleStyle.bind(this);
  }

  componentDidMount() {
    axios
      .get("/data")
      .then((response) => {
        let data = response.data;

        this.setState({ data });
      })
      .catch((e) => {
        console.log(e);
      });
  }

  toggleStyle(e) {
    e.target.nextSibling.className === "rows hidden"
      ? (e.target.nextSibling.className = "rows")
      : (e.target.nextSibling.className = "rows hidden");
  }

  render() {
    return (
      <div className="App">
        {this.state.data.map((list, id) => {
          return (
            <>
              <div className="list" onClick={this.toggleStyle}>
                List ID: {id + 1} Entries {list.length}{" "}
              </div>
              <Test list={list} id={id}></Test>
            </>
          );
        })}
      </div>
    );
  }
}

export default App;
