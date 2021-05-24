import React, { useRef } from 'react';
import SimpleBar from 'simplebar-react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

// Pages
import Main from './pages/Main/Page';

// Components
import Button from './pages/Button/Page';
import Alert from './pages/Alert/Page';
import BottomInfo from './pages/BottomInfo/Page';
import Layout from './pages/Layout/Page';
import DashboardCard from './pages/DashboardCard/Page';
import HeaderTab from './pages/HeaderTab/Page';

import Header from './statics/Header/Header';
import Sidebar from './statics/Sidebar/Sidebar';

const Workspace = () => {

	const scrollArea = useRef(null);

	const scrollTop = () => {
		scrollArea.current.scroll({ top: 0, left: 0 });
	}

	return <>
		<Header />
		<div id="mainWrapper">
			<Sidebar />
			<section className="contentWrapper">
				<SimpleBar scrollableNodeProps={{ ref: scrollArea }} style={{ maxHeight: '100%' }}>
					<Router>
						<Switch>
							<Route exact path="/" render={
								({ ...props }) => <Main scrollTop={scrollTop} {...props} />
							} />
							<Route path="/Button" render={
								({ ...props }) => <Button scrollTop={scrollTop} {...props} />
							} />
							<Route path="/Alert" render={
								({ ...props }) => <Alert scrollTop={scrollTop} {...props} />
							} />
							<Route path="/BottomInfo" render={
								({ ...props }) => <BottomInfo scrollTop={scrollTop} {...props} />
							} />
							<Route path="/Layout" render={
								({ ...props }) => <Layout scrollTop={scrollTop} {...props} />
							} />
							<Route path="/DashboardCard" render={
								({ ...props }) => <DashboardCard scrollTop={scrollTop} {...props} />
							} />
							<Route path="/HeaderTab" render={
								({ ...props }) => <HeaderTab scrollTop={scrollTop} {...props} />
							} />
						</Switch>
					</Router>
				</SimpleBar>
			</section>
		</div>
	</>;

}

export default Workspace;