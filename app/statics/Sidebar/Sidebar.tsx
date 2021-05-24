import React, { useState, useEffect, useRef } from 'react';
import { useGlobalState, Icons, getLangText } from '../../support';
import SimpleBar from 'simplebar-react';
import './style.scss';
import moment from 'moment';
import OutSideClick from '../Header/OutsideClick';
const defaultConfig = window['defaultConfig'];

const Sidebar = () => {

	const [globalState, dispatch] = useGlobalState();

	const [hash, setHash] = useState(window.location.hash);
	const [menu, setMenu] = useState([
		{ link: '#/Button', icon: <Icons.Crosshair />, title: 'Button' },
		{ link: '#/Alert', icon: <Icons.Clipboard />, title: 'Alert' },
		{ link: '#/BottomInfo', icon: <Icons.GitCommit />, title: 'Bottom Info' },
		{ link: '#/DashboardCard', icon: <Icons.Monitor />, title: 'Dashboard Card' },
		{ link: '#/HeaderTab', icon: <Icons.Ram />, title: 'Header Tab' },
		{ link: '#/Layout', icon: <Icons.Box />, title: 'Layout' }
	]);

	const [menuTop, setMenuTop] = useState([
		{ link: '#/', icon: <Icons.HelpCircle />, title: getLangText('nasilKullanilir') }
	]);

	const [version, setVersion] = useState(localStorage.getItem('version'));
    const [versionDate, setVersionDate] = useState(localStorage.getItem('versionDate'));

	const sidebarRef = useRef(null);
	
	OutSideClick(sidebarRef, sidebarRef, globalState.sidebar, () => {
		window.innerWidth <= 768 && dispatch({ type: 'changeSidebar', value: false });
	});

	useEffect(() => {

		if (version === '[version]') setVersion('Development');
        if (versionDate === '[versionDate]') {
            setVersionDate(moment().format('DD.MM.YYYY HH:mm:ss'));
        } else {
            setVersionDate(moment(parseInt(versionDate)).format('DD.MM.YYYY HH:mm:ss'));
        }

		window.addEventListener('popstate', documentPopstate);
		window.addEventListener('resize', handleResizeAndCollapseSidebar);
		handleResizeAndCollapseSidebar();
		return () => {
			window.removeEventListener('popstate', documentPopstate);
			window.removeEventListener('resize', handleResizeAndCollapseSidebar);
		}

	}, []);

	const documentPopstate = (e) => {
		setHash(window.location.hash);
	}

	const handleResizeAndCollapseSidebar = () => {
		dispatch({ type: 'changeSidebar', value: window.innerWidth > 768 });
	}

	const goPage = (page) => {

		window.location.href = defaultConfig['mainDomain'] + page;
		handleResizeAndCollapseSidebar();

	}

	return(
		<aside ref={sidebarRef} className={ globalState.sidebar ? 'opened' : 'closed' }>
			<div className="listTree">
				
				<SimpleBar style={{ maxHeight: '100%' }}>

					<div className="treeTitle mt20">KARCIN UI</div>
					<ul className="pages">
						{ menuTop.map((item, index) => (
							<li key={index} className={ hash === item.link ? 'active' : '' }>
								<a onClick={() => goPage(item.link)}>
									{ item.icon }
									<b>{ item.title }</b>
								</a>
							</li>
						)) }
					</ul>

					<div className="treeTitle mt20">{ getLangText('uiBilesenleri') }</div>
					<ul className="pages">
						{ menu.map((item, index) => (
							<li key={index} className={ (hash === item.link ? 'active ' : '') }>
								<a onClick={() => goPage(item.link)}>
									{ item.icon }
									<b>{ item.title }</b>
								</a>
							</li>
						)) }
					</ul>
					
				</SimpleBar>

			</div>
			<div className="sidebarBottom">
				<img onClick={() => window.location.href = 'https://www.cekino.com/'} className="cekinoLogo" src="./img/cekinobeyaz.png" alt="Çekino Logo" />
				<span>
					<em>{getLangText('versiyon')}: {version}</em>
					<em>{versionDate}</em>
				</span>
			</div>
		</aside>
	);

}

export default Sidebar;