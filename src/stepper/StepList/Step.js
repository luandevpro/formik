import React, { Component } from "react";

export default class Step extends Component {
	render() {
		return <div>{this.props.render()}</div>;
	}
}
