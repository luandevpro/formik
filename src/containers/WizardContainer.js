import React from "react";
import { Consumer } from "../contexts";
import Wizard from "./../components/formik/Wizard";

const WizardContainer = props => (
	<Consumer>
		{({
			values,
			onNextStep,
			onPreviousStep,
			activeStepIndex,
			getTotalSteps,
			onSubmit,
		}) => (
			<Wizard
				{...props}
				values={values}
				onNextStep={onNextStep}
				onPreviousStep={onPreviousStep}
				activeStepIndex={activeStepIndex}
				getTotalSteps={getTotalSteps}
				onSubmit={onSubmit}
			>
				{props.children}
			</Wizard>
		)}
	</Consumer>
);
export default WizardContainer;
