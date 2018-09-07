import React, { Component } from "react";

export default class FormWizard extends Component {
	render() {
		var { children } = this.props;
		return <div> {children} </div>;
	}
}
