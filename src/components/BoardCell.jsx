import React, { Component } from "react";
import PropTypes from "prop-types";

class BoardCell extends Component {
	render() {
		const { contents } = this.props;
		return <div>{JSON.stringify(contents)}</div>;
	}
}

export default BoardCell;
