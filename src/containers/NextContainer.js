import React from "react";
import { Consumer } from "../contexts";
import { Next } from "../stepper/ButtonList";

const NextContainer = props => (
	<Consumer>
		{({ onNextStep, activeStepIndex }) => (
			<Next
				{...props}
				onNextStep={onNextStep}
				activeStepIndex={activeStepIndex}
			/>
		)}
	</Consumer>
);

export default NextContainer;
