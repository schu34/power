import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";
import BoardCell from "./BoardCell";

class Board extends Component {
	render() {
		// const boardHeight = this.props.data.length;
		// const boardWidth = this.props.data[0].length;

		return (
			<div>
				{this.props.data.map((row, i) => {
					return (
						<Row key={i}>
							{row.map((cell, i) => {
								return (
									<Col md={4}>
										<BoardCell key={i} contents={cell} />
									</Col>
								);
							})}
						</Row>
					);
				})}
			</div>
		);
	}
}

export default Board;
