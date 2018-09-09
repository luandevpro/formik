import React from "react";
import { Form, Field } from "formik";
import { CustomInput } from "./CustomInput";
import { CustomRadio } from "./CustomRadio";
import CheckboxGroup, { CustomCheckbox } from "./CustomCheckbox";
import SelectField from "./SelectField";

export default ({
	setFieldValue,
	setFieldTouched,
	values,
	touched,
	errors,
	dirty,
	isSubmitting,
}) => (
	<Form>
		<Field
			label="Email"
			name="email"
			className="form-control"
			type="email"
			id="email"
			placeholder="Enter your email"
			component={CustomInput}
		/>{" "}
		<Field
			label="Password"
			name="password"
			className="form-control"
			type="password"
			id="password"
			placeholder="Enter your Password"
			component={CustomInput}
		/>{" "}
		<Field
			value={values.topics}
			onChange={setFieldValue}
			onBlur={setFieldTouched}
			error={errors.topics}
			touched={touched.topics}
			component={SelectField}
		/>{" "}
		<Field
			name="gender"
			id="male"
			value="male"
			checked={values.gender === "male"}
			label="Male"
			className="mr-2"
			component={CustomRadio}
		/>{" "}
		<Field
			name="gender"
			id="female"
			checked={values.gender === "female"}
			label="FeMale"
			value="female"
			className="mr-2"
			component={CustomRadio}
		/>{" "}
		<br />
		<CheckboxGroup
			id="checkboxGroup"
			label="Your Favorite Color"
			value={values.checkboxGroup}
			error={errors.checkboxGroup}
			touched={touched.checkboxGroup}
			onChange={setFieldValue}
			onBlur={setFieldTouched}
		>
			<Field
				component={CustomCheckbox}
				name="checkboxGroup"
				id="red"
				label="Red"
			/>
			<Field
				component={CustomCheckbox}
				name="checkboxGroup"
				id="blue"
				label="Blue"
			/>
			<Field
				component={CustomCheckbox}
				name="checkboxGroup"
				id="yellow"
				label="Yellow"
			/>
		</CheckboxGroup>{" "}
		<Field
			label="I Agree To The Terms"
			name="terms"
			className="checkbox ml-5"
			type="checkbox"
			value={values.terms}
			id="terms"
			component={CustomCheckbox}
		/>{" "}
		{dirty && (
			<button
				disabled={isSubmitting}
				className="btn btn-success form-control btn-lg"
				type="submit"
			>
				Submit{" "}
			</button>
		)}{" "}
	</Form>
);
