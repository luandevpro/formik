import React, { Component } from "react";

export default class Page extends Component {
	render() {
		var { children } = this.props;
		return <div className="kashif">{children}</div>;
	}
}
