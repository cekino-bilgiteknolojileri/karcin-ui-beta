import React, { memo } from "react";
import './style.scss';

interface propsType {
	// Required
	// none

	// Optional
	text?: string,
	color?: 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'dark' | 'danger' | 'cancel',
	size?: 'default' | 'medium' | 'small' | 'extraSmall',
	icon?: React.ReactNode | 'spin'
	full?: boolean,
	disable?: boolean,
	className?: string
	onClick?(): void
}

const Button = (props:propsType) => {

	return(
		<div onClick={props.onClick} className={ 'touchable' + ( props.className ? ' ' + props.className : '' ) + ( props.color ? ' ' + props.color : '' ) + ( props.size ? ' ' + props.size : '' ) + ( props.full ? ' full' : '' ) + ( props.disable ? ' disable' : '' ) }>
			{ props.icon &&
				<span className={ props.text ? '' : 'allBorderRadius' }>
					{ props.icon === 'spin' ? <em className="spin" /> : props.icon }
				</span>
			}
			{ props.text && <b>{ props.text }</b> }
		</div>
	);

}

export default memo(Button);