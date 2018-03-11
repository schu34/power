import React, { Component } from "react";
import PropTypes from "prop-types";
import BoardCell from "./BoardCell";

class Board extends Component {
	render() {
		// const boardHeight = this.props.data.length;
		// const boardWidth = this.props.data[0].length;

		return (
			<div className= "board-container">
				{this.props.data.map((row, i) => {
					return (
						<div key={i} className="board-row">
							{row.map((cell, i) => {
								return (
									<div className="board-col">
										<BoardCell key={i} contents={cell} />
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}
}

export default Board;
