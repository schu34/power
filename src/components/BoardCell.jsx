import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class BoardCell extends Component {
  render () {
    const { contents } = this.props
    let style = {
      backgroundColor: getColor(contents),
      opacity: getOpacity(contents)
       
    }
    return (
      <div className = "cell">
        {contents.toFixed(2)}
        <div style={style} className='cell-color'></div>
      </div>
    )
  }
}

function getColor(num){
  return num > 0 ? "red": "blue";
}
function getOpacity(num){
  return Math.min(Math.abs(num / 100), 1);
}
export default BoardCell
