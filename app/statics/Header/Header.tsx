import React from 'react';
import { useGlobalState, getLangText, Icons } from '../../support';
import Language from './Language';
import './style.scss';
const defaultConfig = window['defaultConfig'];

const Header = () => {

	const [globalState, dispatch] = useGlobalState();
	const lang = localStorage.getItem('lang');

	const goPage = (page) => {
		window.open( page, '_blank' );
	}

	return(
		<header>
			<div className="headerLeft">
				<div className="headerIcon" onClick={() => dispatch({ type: 'changeSidebar', value: !globalState.sidebar })}>
					{ globalState.sidebar ? <Icons.Menu /> : <Icons.ChevronRight /> }
				</div>
				<a href={ defaultConfig.mainDomain + '#/' } className="headerLogo">
					<img src={'./img/' + defaultConfig['logo-' + lang]} alt={defaultConfig['name-' + lang]} />
				</a>
				<em>{ getLangText('baslik') }</em>
			</div>
			<div className="headerRight">
				
				<div className="headerRightIcon">
					<Language />
				</div>
				<div className="headerRightIcon">
					<span onClick={() => goPage('https://www.npmjs.com/package/karcin-ui')} className="link">NPM</span>
				</div>
			</div>
		</header>
	);

}

export default Header;