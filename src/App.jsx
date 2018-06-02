import React, {Component} from 'react'
import './App.css'
import Board from './components/board.jsx'
import addAssign from "./utils/addAssign";
class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tickLength: 1000,
      power: 0,
      cash: 0,
      cashMultiplier: 1,
      powerMultiplier: 1,
      board: generateBoard(50,50)
    }
    this.addCash = this.addCash.bind(this)
    this.state.interval = setInterval(this.tick.bind(this), this.state.tickLength)
  }

  tick () {
    this.addCash(1)
  }

  addCash (amount) {
    const {cash: currentCash, cashMultiplier: multiplier} = this.state
    this.setState({cash: currentCash + amount * multiplier})
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

const a  ={
  a: 1,
  b: 2,
  c: 3,
}

const b = {
  a: 3,
  b: 2,
  c: 1,
  z: 5,
}

console.log((addAssign(a, b)));

export default App
