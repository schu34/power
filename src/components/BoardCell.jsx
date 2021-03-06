import React, { Component } from 'react'
// import PropTypes from 'prop-types'

class BoardCell extends Component {
  render () {
    const { building, heat, power } = this.props
    let style = {
      backgroundColor: getColor(heat),
    }

    return (
      <div style={style} className="cell">
        {/* {displayBuilding(building)} */}
      </div>
    )
  }
}

function displayBuilding(building){
  return building.name || "#"
}

const maxHeat = 100;
const minHeat = -100
function getColor(num){
  if(num > 0){
    return `hsl(${scaleNum(num, maxHeat, 50, 0)},100%,${scaleNum(num, maxHeat,100, 50)}%)`
  } else {
    return `hsl(${scaleNum(num, minHeat, 200, 240)}, 100%, ${scaleNum(num, minHeat, 100, 50)}%`
  }
}

function scaleNum(num, max, lower, upper ){
  const range = upper - lower;
  return lower + (num/max*range)
}

export default BoardCell
