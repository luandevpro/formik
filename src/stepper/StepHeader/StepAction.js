import React, { Component } from "react";
import styled from "styled-components";

export default class StepAction extends Component {
	render() {
		var { activeStepIndex, totalStep } = this.props;
		var actives = [];
		if (activeStepIndex === 0) {
			actives.push(true);
		}
		console.log(actives);
		return (
			<StepWrapper>
				<StepChild active={true}>Order</StepChild>
				<StepChild active={true}>Order Details</StepChild>
				<StepChild active={false}>Payments</StepChild>
			</StepWrapper>
		);
	}
}

export const StepWrapper = styled.ul`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 50px;
	counter-reset: step;
	padding: 0;
`;

export const StepChild = styled.li`
	position: relative;
	list-style-type: none;
	display: grid;
	justify-content: center;
	&:before {
		content: counter(step);
		counter-increment: step;
		display: block;
		border: 1px solid red;
		border-radius: 50%;
		margin-bottom: 15px;
		width: 50px;
		height: 50px;
		text-align: center;
		line-height: 50px;
		background: #fff;
		z-index: 999;
	}
	&:after {
		background: red;
		height: 1px;
		width: 100%;
		position: absolute;
		content: "";
		top: 25px;
		left: -50%;
	}
	&:first-child:after {
		content: none;
	}
	&:before {
		color: ${props => (props.active ? "green" : "red")};
		border: 1px solid ${props => (props.active ? "green" : "red")};
	}
	&:after {
		background: ${props => (props.active ? "green" : "red")};
	}
`;
