import React, { useEffect, useState } from 'react';
import { getLangText } from '../../support';
import { HeaderTab, BottomInfo } from 'karcin-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeStyle from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import './style.scss';
import codeString from './codeString';
import PropsTable from '../PropsTable';

const BottomInfoPage = (props) => {

	const [tab, setTab] = useState(1);

	useEffect(() => {
		props.scrollTop();
	}, []);

	return(
		<div className="wrapper">

			<div className="componentH1">BottomInfo</div>
			<p className="normalP mt10 mb20" dangerouslySetInnerHTML={{ __html: getLangText('bottomInfoMetin') }} />

			<HeaderTab activeTab={tab} changeTab={setTab} tabs={[ getLangText('ornekler'), getLangText('ozellikleri'), getLangText('kaynakKod') ]} />

			{ tab === 1 && <>

				<div className="componentH2">{ getLangText('basitKullanim') }</div>
				<BottomInfo values={[
					{ color: '#2152cc', title: 'Primary' },
					{ color: '#6c757d', title: 'Secondary' },
					{ color: '#28a745', title: 'Success' },
					{ color: '#17a2b8', title: 'Info' },
					{ color: '#ffb827', title: 'Warning' },
					{ color: '#ff475f', title: 'Danger' },
					{ color: '#343a40', title: 'Dark' }
				]} />

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

		{ propertyName: 'values', required: required(), type: 'Array<{ color: string, title: string }>', description: getLangText('propsBottomInfoValues') },

		{ propertyName: 'className', required: optional(), type: 'string', description: getLangText('propsClassName') }
		
	]);

	return <PropsTable table={table} />;

}

export default BottomInfoPage;