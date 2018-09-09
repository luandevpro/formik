import React, { Component } from "react";
import { Provider } from "./contexts";

export default class AppProvider extends Component {
	state = {
		activeStepIndex: 0,
		values: {
			firstName: "",
			lastName: "",
			userName: "",
			age: null,
			email: "",
		},
		totalStep: 0,
	};
	onNextStep = values => {
		var { activeStepIndex, totalStep } = this.state;
		if (activeStepIndex < totalStep - 1) {
			this.setState({
				activeStepIndex: this.state.activeStepIndex + 1,
				values,
			});
		}
		return activeStepIndex;
	};
	onPreviousStep = () => {
		var { activeStepIndex } = this.state;
		if (activeStepIndex > 0) {
			this.setState(({ activeStepIndex }) => {
				return {
					activeStepIndex: activeStepIndex - 1,
				};
			});
		}
		return activeStepIndex;
	};
	getTotalSteps = totalStep => {
		this.setState({ totalStep: totalStep });
	};
	onSubmit = values => {
		alert(JSON.stringify(values, null, 2));
	};
	render() {
		var { activeStepIndex, totalStep, values } = this.state;
		var { children } = this.props;
		return (
			<Provider
				value={{
					activeStepIndex,
					totalStep,
					values,
					onNextStep: this.onNextStep,
					onPreviousStep: this.onPreviousStep,
					getTotalSteps: this.getTotalSteps,
					onSubmit: this.onSubmit,
				}}
			>
				<div className="container mt-5"> {children} </div>
			</Provider>
		);
	}
}
