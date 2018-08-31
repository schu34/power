import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BoardCell from './BoardCell'

class Board extends Component {
  render () {
    // const boardHeight = this.props.data.length;
    // const boardWidth = this.props.data[0].length;

    return (
      <div className='board-container'>
        {this.props.data.heat.map((row, i) => {
          return (
            <div key={i} className='board-row'>
              {row.map((cell, j) => {
                return (
                  <div className='board-col'>
                    <BoardCell addCash={this.props.addCash} key={i} heat={cell} building={this.props.data.buildings[i][j]} power={this.props.data.power[i][j]}/>
                  </div>
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

export default Board
