import React, { Component } from "react";
import styled from "styled-components";

export default class StepAction extends Component {
	showActive = (totalStep, activeStepIndex) => {
		var result = Array(totalStep).fill(false);
		if (activeStepIndex === 0) {
			result[activeStepIndex] = true;
			return result;
		}
		return result;
	};
	render() {
		var { activeStepIndex, totalStep } = this.props;
		var active = this.showActive(totalStep, activeStepIndex);
		console.log(active);
		return (
			<StepWrapper>
				<StepChild active={true}>Order</StepChild>
				<StepChild
					active={
						activeStepIndex === 1 ||
						activeStepIndex === 2 ||
						activeStepIndex === 3
							? true
							: false
					}
				>
					Order Details
				</StepChild>
				<StepChild
					active={
						activeStepIndex === 2 || activeStepIndex === 3 ? true : false
					}
				>
					Payments
				</StepChild>
				<StepChild active={activeStepIndex === 3 ? true : false}>
					Success
				</StepChild>
			</StepWrapper>
		);
	}
}

export const StepWrapper = styled.ul`
	position: relative;
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: 50px;
	counter-reset: step;
	padding: 0;
	margin-bottom: 80px;
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
		border: 3px solid red;
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
		height: 3px;
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
		border: 3px solid ${props => (props.active ? "green" : "red")};
	}
	&:after {
		background: ${props => (props.active ? "green" : "red")};
	}
`;
