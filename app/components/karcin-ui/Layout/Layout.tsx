import React, { memo } from "react";
import './style.scss';

interface propsType {
	// Required
	// none

	// Optional
	children?: React.ReactNode,
	title?: string,
	rightType?: 'button' | 'switch' | 'text' | 'textButton',
	rightText?: string,
	rightButtonState?: boolean,
	rightButtonFunction?(): void,
	rightButtonText?: string,
	contentStyle?: object,
	className?: string
}

const Layout = (props:propsType) => {

	return(
		<div className={ 'layout' + ( props.className ? ' ' + props.className : '' ) }>
			<div className="layoutTitle">

				<h3>{ props.title }</h3>

				{ props.rightType === 'button' && (
					<div className="layoutTitleRight">
						<p>{ props.rightText }</p>
						<div onClick={props.rightButtonFunction} className={ 'layoutTitleRightButton' + ( props.rightButtonState ? '' : ' disable' ) }>
							<strong>{ props.rightButtonText }</strong>
							{ !props.rightButtonState && (
								<span className="load" />
							) }
						</div>
					</div>
				) }

				{ props.rightType === 'switch' && (
					<div className="layoutTitleRight">
						<p>{ props.rightText }</p>
						<div onClick={props.rightButtonFunction} className={ 'layoutTitleRightSwitch' + ( props.rightButtonState ? ' active' : '' ) }>
							<em />
						</div>
					</div>
				) }

				{ props.rightType === 'text' && (
					<div className="layoutTitleRight layoutTitleRightText">
						<p>{ props.rightText }</p>
					</div>
				) }

				{ props.rightType === 'textButton' && (
					<div className="layoutTitleRight layoutTitleRightText layoutTitleRightTextButton">
						<p onClick={props.rightButtonFunction}>{ props.rightText }</p>
					</div>
				) }

			</div>
			<div className="layoutContent" style={ props.contentStyle ? props.contentStyle : {} }>
				{ props.children }
			</div>
		</div>
	);

}

export default memo(Layout);