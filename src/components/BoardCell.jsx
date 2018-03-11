import React, { Component } from "react";
import PropTypes from "prop-types";
import { Row, Col } from "react-bootstrap";

class BoardCell extends Component {
	render() {
		const { contents } = this.props;
		return <div>{JSON.stringify(contents)}</div>;
	}
}

export default BoardCell;
