import React, { Component } from "react";
import "./App.css";
import Board from "./components/board.jsx";

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
        <div class="board">
          <Board data={this.state.board} />
        </div>
      </div>
    );
  }
}

export default App;
