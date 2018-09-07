import React, { Component } from "react";

export default class StepHeader extends Component {
	render() {
		var { children } = this.props;
		return <div className=""> {children} </div>;
	}
}
