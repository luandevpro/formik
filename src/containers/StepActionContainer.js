import React from "react";
import { Consumer } from "../contexts";
import { StepAction } from "../stepper/StepHeader";

const StepActionContainer = props => (
	<Consumer>
		{({ activeStepIndex, totalStep }) => (
			<StepAction
				{...props}
				activeStepIndex={activeStepIndex}
				totalStep={totalStep}
			/>
		)}
	</Consumer>
);

export default StepActionContainer;
