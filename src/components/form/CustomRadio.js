import React from "react";

export const CustomRadio = ({
	field,
	className,
	id,
	label,
	name,
	form: { errors, touched },
	...props
}) => (
	<span
		className={
			touched[field.name] && errors[field.name]
				? "border px-3 py-2 border-danger rounded  form-group mr-3"
				: "form-group mr-3"
		}
	>
		<input
			type="radio"
			id={id}
			name={name}
			{...field}
			className={className}
			{...props}
		/>{" "}
		<label htmlFor={id}> {label} </label>{" "}
	</span>
);

export default CustomRadio;
