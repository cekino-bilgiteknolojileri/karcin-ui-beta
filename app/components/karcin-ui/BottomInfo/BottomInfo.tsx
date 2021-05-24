import React, { memo } from "react";
import './style.scss';

interface propsType {
	// Required
	values: Array<{ color: string, title: string }>,

	// Optional
	className?: string
}

const BottomInfo = (props:propsType) => {

	return(
		<div className={ 'bottomInfo' + ( props.className ? ' ' + props.className : '' ) }>
			{ props.values.map((item, index) => (
				<div key={index} className="bottomInfoSingle">
					<span style={{ backgroundColor: item.color }}></span>
					<p>{ item.title }</p>
				</div>
			)) }
		</div>
	);

}

export default memo(BottomInfo);