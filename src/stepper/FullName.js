import React, { Component, Fragment } from "react";
import { Field } from "formik";
import { Error, required } from "./../components/formik/Error";

export default class FullName extends Component {
	render() {
		return (
			<Fragment>
				<div className="form-group">
					<label>First Name</label>
					<Field
						name="firstName"
						component="input"
						type="text"
						placeholder="First Name"
						className="form-control"
						validate={required}
					/>
					<Error name="firstName" />
				</div>
				<div className="form-group">
					<label>Last Name</label>
					<Field
						name="lastName"
						component="input"
						type="text"
						className="form-control"
						placeholder="Last Name"
						validate={required}
					/>
					<Error name="lastName" />
				</div>
			</Fragment>
		);
	}
}
