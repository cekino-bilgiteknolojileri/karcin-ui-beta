import React, { useEffect } from 'react';

const OutSideClick = (visible, hidden, show, callback) => {

	useEffect(() => {
		window.addEventListener('click', documentClick);
		return () => {
			window.removeEventListener('click', documentClick);
		}
	}, [visible, hidden, show]);

	const documentClick = (event) => {
		if ( !visible.current.contains(event.target) && !hidden.current.contains(event.target) && show ) callback();
	}

}

export default OutSideClick;