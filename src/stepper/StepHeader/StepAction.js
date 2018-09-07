import React, { Component } from "react";
import styled from "styled-components";

export default class StepAction extends Component {
	render() {
		return (
			<StepWrapper>
				<StepChild>
					<div>1</div>
				</StepChild>
				<div>Order Details</div>
				<div>Payments</div>
			</StepWrapper>
		);
	}
}

export const StepWrapper = styled.div`
	position: relative;
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 50px;
`;

export const StepChild = styled.div`
	position: relative;
	border-radius: 50%;
	border: 1px solid powderblue;
	width: 50px;
	height: 50px;
	div {
		position: absolute;
		top: 50%;
		left: 50%;
		margin: 0 auto;
	}
`;
