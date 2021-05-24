import React, { useState, memo } from "react";
import './style.scss';

interface propsType {
	// Required
	title: string,
	subTitle: string | number,
	icon: React.ReactNode,
	color: string

	// Optional
	// none
}

const DashboardCard = (props:propsType) => {

	const getRandomInt = (min, max) => {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	const [small, setSmall] = useState(() => getRandomInt(90, 160));
	const [span, setSpan] = useState(() => getRandomInt(90, 130));

	return(
		<div className="dashCard" style={{ backgroundColor: props.color }}>
			<div className="dashCardInfo">
				<em>{ props.title }</em>
				<b>{ props.subTitle }</b>
			</div>
			<div className="dashCardIcon">{ props.icon }</div>
			<small style={{ left: small }}></small>
			<span style={{ left: span }}></span>
		</div>
	);

}

export default memo(DashboardCard);