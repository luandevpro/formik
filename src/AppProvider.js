import React, { Component } from "react";
import { Provider } from "./contexts";

export default class AppProvider extends Component {
	state = {
		activeStepIndex: 0,
		totalStep: 0,
	};
	onNextStep = () => {
		var { activeStepIndex, totalStep } = this.state;
		if (activeStepIndex < totalStep) {
			this.setState(({ activeStepIndex }) => {
				return {
					activeStepIndex: activeStepIndex + 1,
				};
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
		this.setState({ totalStep: totalStep - 1 });
	};
	render() {
		var { activeStepIndex, totalStep } = this.state;
		var { children } = this.props;
		return (
			<Provider
				value={{
					activeStepIndex,
					totalStep,
					onNextStep: this.onNextStep,
					onPreviousStep: this.onPreviousStep,
					getTotalSteps: this.getTotalSteps,
				}}
			>
				<div className="container mt-5"> {children} </div>
			</Provider>
		);
	}
}
