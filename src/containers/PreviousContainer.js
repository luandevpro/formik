import React from "react";
import { Consumer } from "../contexts";
import { Previous } from "../stepper/ButtonList";

const PreviousContainer = props => (
	<Consumer>
		{({ onPreviousStep }) => (
			<Previous {...props} onPreviousStep={onPreviousStep} />
		)}
	</Consumer>
);
export default PreviousContainer;
