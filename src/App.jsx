import React, {Component} from 'react';
import './App.css';
import Board from './components/board.jsx';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      tickLength: 1000,
      power: 0,
      cash: 0,
      cashMultiplier: 1,
      powerMultiplier: 1,
      board: 
       [[{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}],
        [{}, {}, {}, {}, {}]]
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

export default App
