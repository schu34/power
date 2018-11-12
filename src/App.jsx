import React, { Component } from "react";
import "./App.css";
import Board from "./components/board.jsx";
import { connect } from "react-redux";
import { addAssign } from "./utils/addAssign";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tickLength: 10,
      power: 0,
      cash: 0,
      totalHeat: 100,
      board: generateBoard(5, 5)
    };

    this.addCash = this.addCash.bind(this);
    this.updateBoard = this.updateBoard.bind(this);
    this.updateHeatMap = this.updateHeatMap.bind(this);
    this.state.interval = setInterval(
      this.tick.bind(this),
      this.state.tickLength
    );
  }

  tick() {
    //this.addCash(1)

    this.updateHeatMap();
    this.setState({
      totalHeat: this.state.board.heat.reduce((acc, row) => {
        return (
          acc +
          row.reduce((acc, curr) => {
            return acc + curr;
          }, 0)
        );
      }, 0)
    });
  }

  placeBuilding(building, row, col) {
    this.setState(oldState => {
      const newState = Object.assign({}, oldState);
      newState.board.buildings[row][col] = building;
      return newState;
    });
  }

  updateHeatMap() {
    const { heat } = this.state.board;
    const newHeat = [];
    const diffusionFactor = 0.5;

    for (var row = 0; row < heat.length; row++) {
      newHeat.push([]);
      for (var col = 0; col < heat[row].length; col++) {
        const thisHeat = heat[row][col];

        let sumDiffs = 0;

        let div = 0;
        for (var rowOffset = -1; rowOffset <= 1; rowOffset++) {
          for (var colOffset = -1; colOffset <= 1; colOffset++) {
            if (!colOffset && !rowOffset) continue;
            if (
              heat[row + rowOffset] !== undefined &&
              heat[row + rowOffset][col + colOffset] !== undefined
            ) {
              sumDiffs += heat[row + rowOffset][col + colOffset] - thisHeat;
              div++;
            }
          }
        }

        let newHeatHere = thisHeat + (sumDiffs / div) * diffusionFactor;

        newHeatHere *= 0.95;

        // if(row === 4 && col === 4){
        //   newHeatHere +=40
        // }
        // if(row === 0 && col === 0 ){
        //   newHeatHere -=40;
        // }
        newHeat[row].push(newHeatHere);
      }
    }
    this.setState(oldState => {
      const newState = Object.assign({}, oldState);
      newState.board.heat = newHeat;

      return newState;
    });
  }

  updateBoard() {
    this.board.forEach((row, i) => {
      row.forEach((cell, j) => {
        if (cell && Object.keys[cell].length) {
          const neighbors = [
            this.board[i][j + 1],
            this.board[i][j - 1],
            this.board[i + 1][j],
            this.board[i - 1][j]
          ].filter(x => x);

          cell.tick(neighbors, this.state.upgrades);
        }
      });
    });
  }

  addCash(amount) {
    const { cash: currentCash, cashMultiplier: multiplier } = this.state;
    this.setState({ cash: currentCash + amount });
  }

  render() {
    return (
      <div className="App">
        <div class="board">
          <Board addCash={this.addCash} data={this.state.board} />
        </div>
        <div className="stats">
          {"cash: " + this.state.cash} <br />{" "}
          {"total heat: " + this.state.totalHeat}
        </div>
      </div>
    );
  }
}

function generateBoard(height, width) {
  const board = { heat: [], power: [], buildings: [] };
  for (var i = 0; i < height; i++) {
    board.heat.push([]);
    board.power.push([]);
    board.buildings.push([]);
    for (var j = 0; j < width; j++) {
      board.heat[i].push(0);
      board.power[i].push(0);
      board.buildings[i].push({});
    }
  }
  // board.heat[2][2] = 100;

  return board;
}

function mapStateToProp(state)
export default connect(App);
