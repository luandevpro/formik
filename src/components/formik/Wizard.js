import React, { Component } from "react";
import { Formik } from "formik";
import Page from "./Page";

export default class FormWizard extends Component {
	static Page = Page;

	validate = values => {
		const activePage = React.Children.toArray(this.props.children)[
			this.props.activeStepIndex
		];
		return activePage.props.validate ? activePage.props.validate(values) : {};
	};

	handleSubmit = (values, bag) => {
		const { children, onSubmit, activeStepIndex } = this.props;
		const isLastPage = activeStepIndex === children.length - 1;
		if (isLastPage) {
			onSubmit(values);
		} else {
			this.props.onNextStep(values);
			bag.setSubmitting(false);
		}
	};
	componentDidMount() {
		this.props.getTotalSteps(this.props.children.length);
	}
	render() {
		const { children, values, activeStepIndex, onPreviousStep } = this.props;
		const activePage = React.Children.toArray(children)[activeStepIndex];
		const isLastPage = activeStepIndex === React.Children.count(children) - 1;
		console.log(isLastPage);
		return (
			<Formik
				initialValues={values}
				enableReinitialize={false}
				validate={this.validate}
				onSubmit={this.handleSubmit}
				render={({ handleSubmit, isSubmitting }) => (
					<form onSubmit={handleSubmit}>
						{activePage}
						<div className="buttons">
							{activeStepIndex > 0 && (
								<button
									type="button"
									className="btn btn-primary btn-lg  mr-3"
									onClick={() => onPreviousStep()}
								>
									« Previous
								</button>
							)}

							{!isLastPage && (
								<button
									type="submit"
									className="btn btn-success btn-lg"
								>
									Next
								</button>
							)}
							{isLastPage && (
								<button
									type="submit"
									className="btn btn-success btn-lg"
									disabled={isSubmitting}
								>
									Submit
								</button>
							)}
						</div>
					</form>
				)}
			/>
		);
	}
}
