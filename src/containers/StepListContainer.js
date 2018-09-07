import React from "react";
import { Consumer } from "../contexts";
import { StepList } from "../stepper/StepList";

const StepListContainer = props => (
	<Consumer>
		{({ getTotalSteps, activeStepIndex }) => (
			<StepList
				{...props}
				getTotalSteps={getTotalSteps}
				activeStepIndex={activeStepIndex}
			>
				{props.children}
			</StepList>
		)}
	</Consumer>
);

export default StepListContainer;
