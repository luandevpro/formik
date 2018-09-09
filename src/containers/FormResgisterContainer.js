import React, { Component } from "react";
import { Consumer } from "../contexts";
import FormResgister from "../components/form/FormResgister";

const FormResgisterContainer = props => (
	<Consumer>
		{({ activeStepIndex }) => (
			<FormResgister {...props} activeStepIndex={activeStepIndex} />
		)}
	</Consumer>
);

export default FormResgisterContainer;
