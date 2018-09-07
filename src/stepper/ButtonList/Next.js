import React, { Component } from "react";

export default class Next extends Component {
	render() {
		var { onNextStep } = this.props;
		return (
			<div>
				<button onClick={() => onNextStep()}>Next </button>
			</div>
		);
	}
}
