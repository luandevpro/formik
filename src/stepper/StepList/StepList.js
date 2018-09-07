import React, { Component } from "react";

export default class StepList extends Component {
	componentDidMount() {
		this.props.getTotalSteps(this.props.children.length);
	}
	render() {
		var { children, activeStepIndex } = this.props;
		return <div>{children[activeStepIndex]}</div>;
	}
}
