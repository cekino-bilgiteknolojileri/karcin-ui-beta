import React from 'react';
import { Provider } from './useGlobalState';
import Workspace from './Workspace';

const reducer = (state, action) => {
	if ( action.type === 'changeSidebar' ){
		return Object.assign({}, state, { sidebar: action.value });
	}
	return state;
}

const initialState = {
	sidebar: window.innerWidth >= 768
};

const Start = () => {
	return(
		<Provider reducer={reducer} initialState={initialState}>
			<Workspace />
		</Provider>
	);
}

export default Start;