import React, { Component } from "react";
import AppProvider from "./AppProvider";
import { ButtonList } from "./stepper/ButtonList";
import FormWizard from "./stepper/FormWizard";
import Step from "./stepper/StepList/Step";
import StepListContainer from "./containers/StepListContainer";
import NextContainer from "./containers/NextContainer";
import PreviousContainer from "./containers/PreviousContainer";
import { Billing, Mailing, Resgister, Success } from "./stepper/StepList/Steps";
import { StepHeader } from "./stepper/StepHeader";
import StepActionContainer from "./containers/StepActionContainer";
import FormResgister from "./components/form/FormResgister";

class App extends Component {
	handleSubmit = value => {
		alert(value);
	};
	render() {
		return (
			<AppProvider>
				<FormWizard>
					<StepHeader>
						<StepActionContainer />
					</StepHeader>
					<StepListContainer>
						<FormResgister />
						<Step render={Resgister} />
						<Step render={Mailing} />
						<Step render={Billing} />
						<Step render={Success} />
					</StepListContainer>
					<ButtonList>
						<NextContainer />
						<PreviousContainer />
					</ButtonList>
				</FormWizard>
			</AppProvider>
		);
	}
}

export default App;
