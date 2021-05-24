import React, { memo } from "react";
import './style.scss';

interface propsType {
	// Required
	text: string | React.ReactNode,
	type: 'success' | 'error' | 'warning' | 'info',

	// Optional
	className?: string
}

const Alert = (props:propsType) => {

	return(
		<div className={ 'alertMessages' + ( props.className ? ' ' + props.className : '' ) + ' alert_' + props.type }>
			<div className="alertMessagesIcon">
				{ props.type === 'success' && <SvgCheck /> }
				{ props.type === 'error' && <SvgCloseCircle /> }
				{ props.type === 'warning' && <SvgWarning /> }
				{ props.type === 'info' && <SvgInfo /> }
			</div>
			<div className="alertMessagesText">{ props.text }</div>
		</div>
	);

}

const SvgCheck = memo(() => {
	return(
		<svg width="1em" height="1em" viewBox="0 0 12 16" fill="currentColor" className="idb">
			<path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
		</svg>
	);
});

const SvgCloseCircle = memo(() => {
	return(
		<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" className="idb">
			<path d="M256 48C141.1 48 48 141.1 48 256s93.1 208 208 208 208-93.1 208-208S370.9 48 256 48zm52.7 283.3L256 278.6l-52.7 52.7c-6.2 6.2-16.4 6.2-22.6 0-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3l52.7-52.7-52.7-52.7c-3.1-3.1-4.7-7.2-4.7-11.3 0-4.1 1.6-8.2 4.7-11.3 6.2-6.2 16.4-6.2 22.6 0l52.7 52.7 52.7-52.7c6.2-6.2 16.4-6.2 22.6 0 6.2 6.2 6.2 16.4 0 22.6L278.6 256l52.7 52.7c6.2 6.2 6.2 16.4 0 22.6-6.2 6.3-16.4 6.3-22.6 0z" stroke="none" />
		</svg>
	);
});

const SvgWarning = memo(() => {
	return(
		<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" className="idb" >
			<path d="M228.9 79.9L51.8 403.1C40.6 423.3 55.5 448 78.9 448h354.3c23.3 0 38.2-24.7 27.1-44.9L283.1 79.9c-11.7-21.2-42.5-21.2-54.2 0zM273.6 214L270 336h-28l-3.6-122h35.2zM256 402.4c-10.7 0-19.1-8.1-19.1-18.4s8.4-18.4 19.1-18.4 19.1 8.1 19.1 18.4-8.4 18.4-19.1 18.4z" stroke="none" />
		</svg>
	);
});

const SvgInfo = memo(() => {
	return(
		<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="idb">
			<circle cx={12} cy={12} r={10} />
			<path d="M12 16v-4M12 8h.01" />
		</svg>
	);
});

export default memo(Alert);