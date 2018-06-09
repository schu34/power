import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class BoardCell extends Component {
  render () {
    const { contents } = this.props
    let style = {
      backgroundColor: getColor(contents),
      opacity: getOpacity(contents)
    }
    console.log(style, contents);
    return (
      <div style={style} className="cell">
        {contents.toFixed(2)}
      </div>
    )
  }
}

const maxHeat = 100;
const minHeat = -100
function getColor(num){
  if(num === 0) return "white"
  if(num > 0){
    return `hsl(${scaleNum(num, maxHeat, 50, 0)},100%,${scaleNum(num, maxHeat,92, 50)}%)`
  } else {
    return `hsl(${scaleNum(num, minHeat, 200, 240)}, 100%, ${scaleNum(num, minHeat, 100, 50)}%`
  }
}

function scaleNum(num, max, lower, upper ){
  const range = upper - lower;
  return lower + (num/max*range)
}
function getOpacity(num){
  return 1;
  // return Math.min(Math.abs(num / 100), 1);
}
export default BoardCell
