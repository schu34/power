import React, { Component } from "react";
import "./App.css";
import Board from "./components/board.jsx";
import {Grid} from "react-bootstrap";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      power: 0,
      cash: 0,
      board: [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]
    };
  }

  render() {
    return (
      <div className="App">
        <Grid>
          <Board data={this.state.board} />
        </Grid>
      </div>
    );
  }
}

export default App;
