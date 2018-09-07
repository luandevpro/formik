import React, { Component } from "react";

export default class Previous extends Component {
	render() {
		var { onPreviousStep } = this.props;
		return (
			<div>
				<button onClick={() => onPreviousStep()}>Previous</button>
			</div>
		);
	}
}
