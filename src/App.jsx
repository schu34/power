import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Board from "./components/board.jsx"

class App extends Component {

  constructor(props){
    super(props)
    this.state = {
      power: 0,
      cash: 0,
      board: [
        [{},{},{}],
        [{},{},{}],
        [{},{},{}],
      ]
    }


  }

  render() {
    return (
      <div className="App">
        <Board data={this.state.board} />
      </div>
    );
  }
}

export default App;
