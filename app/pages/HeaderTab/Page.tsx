import React, { useEffect, useState } from 'react';
import { getLangText } from '../../support';
import { HeaderTab } from 'karcin-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeStyle from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import './style.scss';
import codeString from './codeString';
import PropsTable from '../PropsTable';

const HeaderTabPage = (props) => {

	const [tab, setTab] = useState(1);
	const [tabExample, setTabExample] = useState(1);

	useEffect(() => {
		props.scrollTop();
	}, []);

	return(
		<div className="wrapper">

			<div className="componentH1">HeaderTab</div>
			<p className="normalP mt10 mb20" dangerouslySetInnerHTML={{ __html: getLangText('headerTabMetin') }} />

			<HeaderTab activeTab={tab} changeTab={setTab} tabs={[ getLangText('ornekler'), getLangText('ozellikleri'), getLangText('kaynakKod') ]} />

			{ tab === 1 && <>

				<div className="componentH2">{ getLangText('basitKullanim') }</div>
				<div className="solidBackground">
					
					<HeaderTab activeTab={tabExample} changeTab={setTabExample} tabs={[ 'Tab Example 1', 'Tab Example 2', 'Tab Example 3', 'Tab Example 4', 'Tab Example 5' ]} />

					{ tabExample === 1 && <p>Tab content: { tabExample }</p> }
					{ tabExample === 2 && <p>Tab content: { tabExample }</p> }
					{ tabExample === 3 && <p>Tab content: { tabExample }</p> }
					{ tabExample === 4 && <p>Tab content: { tabExample }</p> }
					{ tabExample === 5 && <p>Tab content: { tabExample }</p> }

				</div>

			</> }

			{ tab === 2 && <>

				<KarcinTable />

			</> }

			{ tab === 3 && <>

				<div className="divCodeHeader mt32"><span><i></i><i></i><i></i></span></div>
				<div className="divCode"><SyntaxHighlighter language="jsx" style={codeStyle}>{codeString}</SyntaxHighlighter></div>

			</> }

		</div>
	);

}

const optional = () => <span className="optional">{ getLangText('optionalWrite') }</span>;
const required = () => <span className="required">{ '* ' + getLangText('requiredWrite') }</span>;

const KarcinTable = () => {

	const [table, setTable] = useState([
		{ propertyName: 'activeTab', required: required(), type: 'number', description: getLangText('propsHeaderTabActiveTab') },
		{ propertyName: 'changeTab', required: required(), type: 'function | (item) => { }', description: getLangText('propsHeaderTabChangeTab') },
		{ propertyName: 'tabs', required: required(), type: 'Array<string>', description: getLangText('propsHeaderTabTabs') }
	]);

	return <PropsTable table={table} />;

}

export default HeaderTabPage;