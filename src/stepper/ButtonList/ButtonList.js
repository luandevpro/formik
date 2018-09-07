import React, { Component } from "react";

export default class ButtonList extends Component {
	render() {
		var { children } = this.props;
		return <div className=""> {children} </div>;
	}
}
