import React, { Component } from "react";
import AppProvider from "./AppProvider";
import { ButtonList } from "./stepper/ButtonList";
import FormWizard from "./stepper/FormWizard";
import Step from "./stepper/StepList/Step";
import StepListContainer from "./containers/StepListContainer";
import NextContainer from "./containers/NextContainer";
import PreviousContainer from "./containers/PreviousContainer";
import { Billing, Mailing, Resgister } from "./stepper/StepList/Steps";
import { StepHeader } from "./stepper/StepHeader";
import StepActionContainer from "./containers/StepActionContainer";

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
						<Step render={Resgister} />
						<Step render={Mailing} />
						<Step render={Billing} />
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
