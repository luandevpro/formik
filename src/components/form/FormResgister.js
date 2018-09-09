import React, { Component } from "react";
import { Formik } from "formik";
import FormField from "./FormField";
import { validationSchema } from "./validation";

export default class FormResgister extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			gender: "",
			terms: false,
			checkboxGroup: [],
			topics: [],
		};
	}
	handleSubmit = (values, { resetForm }) => {
		const payload = {
			...values,
			topics: values.topics.map(t => t.value),
		};
		this.props.handleSubmit(JSON.stringify(payload, null, 2));
		resetForm({
			email: "",
			password: "",
			gender: "",
			terms: false,
			checkboxGroup: [],
			topics: [],
		});
	};
	render() {
		var {
			email,
			password,
			topics,
			gender,
			terms,
			checkboxGroup,
		} = this.state;
		return (
			<Formik
				initialValues={{
					email,
					password,
					topics,
					gender,
					terms,
					checkboxGroup,
				}}
				onSubmit={this.handleSubmit}
				validationSchema={validationSchema}
				render={props => <FormField {...props} />}
			/>
		);
	}
}
