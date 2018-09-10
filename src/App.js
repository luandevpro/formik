import React, { Component } from "react";
import AppProvider from "./AppProvider";
import FormWizard from "./stepper/FormWizard";
import Wizard from "./components/formik/Wizard";
import WizardContainer from "./containers/WizardContainer";
import { StepHeader } from "./stepper/StepHeader";
import StepActionContainer from "./containers/StepActionContainer";
import { Field } from "formik";
import { Error, required } from "./components/formik/Error";
import FullName from "./stepper/FullName";

class App extends Component {
	render() {
		return (
			<AppProvider>
				<FormWizard>
					<StepHeader>
						<StepActionContainer />
					</StepHeader>
					<WizardContainer>
						<Wizard.Page
							validate={values => {
								const errors = {};
								if (!values.firstName) {
									errors.firstName = "Required";
								}
								if (!values.lastName) {
									errors.lastName = "Required";
								}
								return errors;
							}}
						>
							<FullName />
						</Wizard.Page>
						<Wizard.Page
							validate={values => {
								const errors = {};
								if (!values.userName) {
									errors.userName = "UserName is Required";
								}
								return errors;
							}}
						>
							<div className="form-group">
								<label>Username</label>
								<Field
									name="userName"
									component="input"
									type="text"
									placeholder="userName"
									className="form-control"
									validate={required}
								/>
								<Error name="userName" />
							</div>
						</Wizard.Page>
						<Wizard.Page
							validate={values => {
								const errors = {};
								if (!values.age) {
									errors.age = "Required";
								}
								if (values.age < 18) {
									errors.age = "Age must at least 18";
								}
								return errors;
							}}
						>
							<div className="form-group">
								<label>Age</label>
								<Field
									name="age"
									component="input"
									type="number"
									placeholder="Age"
									className="form-control"
									validate={required}
								/>
								<Error name="age" />
							</div>
						</Wizard.Page>
						<Wizard.Page
							validate={values => {
								const errors = {};
								if (!values.email) {
									errors.email = "Required";
								}
								return errors;
							}}
						>
							<div className="form-group">
								<label>Email</label>
								<Field
									name="email"
									className="form-control"
									component="input"
									type="email"
									placeholder="Email"
								/>
								<Error name="email" />
							</div>
						</Wizard.Page>
					</WizardContainer>
				</FormWizard>
			</AppProvider>
		);
	}
}

export default App;
