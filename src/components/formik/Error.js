import React from "react";
import { Field } from "formik";

export const required = value => (value ? undefined : "Required");

export const Error = ({ name }) => (
	<Field
		name={name}
		render={({ form: { touched, errors } }) =>
			touched[name] && errors[name] ? (
				<div className="text-danger mt-2">{errors[name]}</div>
			) : null
		}
	/>
);
