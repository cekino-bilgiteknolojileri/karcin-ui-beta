import React, { useEffect, useState } from 'react';
import { getLangText } from '../../support';
import { HeaderTab, Alert } from 'karcin-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeStyle from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import './style.scss';
import codeString from './codeString';
import PropsTable from '../PropsTable';

const AlertPage = (props) => {

	const [tab, setTab] = useState(1);

	useEffect(() => {
		props.scrollTop();
	}, []);

	return(
		<div className="wrapper">

			<div className="componentH1">Alert</div>
			<p className="normalP mt10 mb20" dangerouslySetInnerHTML={{ __html: getLangText('alertMetin') }} />

			<HeaderTab activeTab={tab} changeTab={setTab} tabs={[ getLangText('ornekler'), getLangText('ozellikleri'), getLangText('kaynakKod') ]} />

			{ tab === 1 && <>

				<div className="componentH2">{ getLangText('basitKullanim') }</div>
				<Alert type="success" text="Signed in successfully, you are being redirected." className="mt10" />
				<Alert type="error" text={ <span>Username or password is incorrect. <a>Try again.</a></span> } className="mt10" />
				<Alert type="warning" text="No users were found." className="mt10" />
				<Alert type="info" text="You can browse the document for more features." className="mt10" />

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

		{ propertyName: 'text', required: required(), type: 'string | React.ReactNode', description: getLangText('propsText') },
		{ propertyName: 'type', required: required(), type: "'success' | 'error' | 'warning' | 'info'", description: getLangText('propsType') },
		
		{ propertyName: 'className', required: optional(), type: 'string', description: getLangText('propsClassName') }

	]);

	return <PropsTable table={table} />;

}

export default AlertPage;