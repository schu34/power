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
				{this.props.data.map(row => {
					return (
						<Row>
							{row.map(cell => {
								<Col>
									<BoardCell contents={cell} />
								</Col>;
							})}
						</Row>
					);
				})}
			</div>
		);
	}
}

export default Board;
