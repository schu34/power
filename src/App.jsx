import React, {Component} from 'react'
import './App.css'
import Board from './components/board.jsx'
import {addAssign} from "./utils/addAssign";

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tickLength: 1000,
      power: 0,
      cash: 0,
      board: generateBoard(5,5)
    }

    this.addCash = this.addCash.bind(this)
    this.updateBoard = this.updateBoard.bind(this);
    this.state.interval = setInterval(this.tick.bind(this), this.state.tickLength)
  }

  tick () {
    this.addCash(1)
  }

  updateBoard(){
    this.board.forEach((row, i)=>{
      row.forEach((cell, j)=>{
        if(cell && Object.keys[cell].length){
          const neighbors = [
            this.board[i][j+1], 
            this.board[i][j-1], 
            this.board[i+1][j], 
            this.board[i-1][j]
          ].filter(x=>x);

          cell.tick(neighbors, this.state.upgrades);
          

        }
      })
    })
  }

  addCash (amount) {
    const {cash: currentCash, cashMultiplier: multiplier} = this.state
    this.setState({cash: currentCash + amount})
  }

  render () {
    return (
      <div className='App'>
        <div class='board'>
          <Board addCash={this.addCash} data={this.state.board} />
        </div>
        <div className='stats'>{'cash: ' + this.state.cash} </div>
      </div>
    )
  }
}


function generateBoard(height, width){
	
	const board = []
	for(var i = 0; i < height; i++){
		board.push([])
		for(var j = 0; j < width; j++){
			board[i].push({});
		}
	}

	return board;
}


export default App
