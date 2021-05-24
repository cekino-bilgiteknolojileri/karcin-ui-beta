import React, { useEffect, useState } from 'react';
import { getLangText } from '../../support';
import { Button, HeaderTab, Alert } from 'karcin-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeStyle from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import './style.scss';
import codeString from './codeString';
import PropsTable from '../PropsTable';

const ButtonPage = (props) => {

	const [tab, setTab] = useState(1);

	useEffect(() => {
		props.scrollTop();
	}, []);

	const codeStringIkon = `npm install --save-dev @svgr/cli`;
	const codeStringIkonSVG = `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 384 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
	<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z"></path>
</svg>`;
	const codeStringCommand = `svgr ./ -d ./Icons --ext tsx --svg-props 'width=1em,height=1em,className=idb'`;
	const codeStringApple = `import * as React from "react";

const SvgApple = () => {
	return(
		<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" className="idb">
			<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" stroke="none" />
		</svg>
	);
}

export default SvgApple;`;

	const consoleWrite = () => {
		console.log(Math.random());
	}

	return(
		<div className="wrapper">

			<div className="componentH1">Button</div>
			<p className="normalP mt10 mb20" dangerouslySetInnerHTML={{ __html: getLangText('buttonMetin') }} />

			<HeaderTab activeTab={tab} changeTab={setTab} tabs={[ getLangText('ornekler'), getLangText('ozellikleri'), getLangText('kaynakKod'), getLangText('ikonDonusturme') ]} />

			{ tab === 1 && <>

				<div className="componentH2">{ getLangText('basitKullanim') }</div>
				<div className="flex fw">
					<Button text="Primary" color="primary" className="mr10 mt10" />
					<Button text="Secondary" color="secondary" className="mr10 mt10" />
					<Button text="Success" color="success" className="mr10 mt10" />
					<Button text="Info" color="info" className="mr10 mt10" />
					<Button text="Warning" color="warning" className="mr10 mt10" />
					<Button text="Danger" color="danger" className="mr10 mt10" />
					<Button text="Dark" color="dark" className="mr10 mt10" />
					<Button text="Cancel" color="cancel" className="mt10" />
				</div>

				<div className="componentH2">{ getLangText('farkliBoyutlardaKullanim') }</div>
				<div className="flex fw" style={{ alignItems: 'flex-end' }}>
					<Button text="Default" color="primary" size="default" className="mr10 mt10" />
					<Button text="Medium" color="info" size="medium" className="mr10 mt10" />
					<Button text="Small" color="dark" size="small" className="mr10 mt10" />
					<Button text="Extra Small" color="cancel" size="extraSmall" className="mt10" />
				</div>
				
				<div className="componentH2">{ getLangText('ikonBeraberKullanim') }</div>
				<p className="normalP mt5" dangerouslySetInnerHTML={{ __html: getLangText('ikonBeraberKullanimMetin') }} />
				<div className="flex fw" style={{ alignItems: 'flex-end' }}>
					<Button text="Left Icon" icon={<SvgApple />} className="mr10 mt10" />
					<Button text="Save" icon={<SvgCheck />} color="dark" className="mr10 mt10" />
					<Button text="Running" icon="spin" color="secondary" className="mr10 mt10" />
					<Button text="Move to Trash" icon={<SvgTrash />} color="danger" size="small" className="mt10" />
				</div>

				<div className="componentH2">{ getLangText('sadeceIkonKullanim') }</div>
				<div className="flex mt10" style={{ alignItems: 'flex-end' }}>
					<Button icon={<SvgApple />} />
					<Button icon={<SvgCheck />} color="dark" className="ml10" />
					<Button icon={<SvgTrash />} color="danger" size="small" className="ml10" />
				</div>

				<div className="componentH2">{ getLangText('etkilesimliKullanim') }</div>
				<div className="flex fw">
					<Button text="Add Notify" onClick={() => {}} className="mr10 mt10" />
					<Button text="Console Write" color="secondary" className="mt10" onClick={consoleWrite} />
				</div>

				<div className="componentH2">{ getLangText('devreDisiKullanim') }</div>
				<div className="flex mt10">
					<Button text="Disable" color="secondary" disable />
					<Button text="Left Icon" icon={<SvgApple />} disable className="ml10" />
				</div>

				<div className="componentH2">{ getLangText('classNameKullanim') }</div>
				<p className="normalP mt5" dangerouslySetInnerHTML={{ __html: getLangText('classNameKullanimMetin') }} />
				<Button text="Class Name" color="primary" className="br40 mt10" />

				<div className="componentH2">{ getLangText('tamGenislikKullanim') }</div>
				<Button text="Full Width Color Primary" full className="mt10" />
				<Button text="Full Width Color Secondary" color="secondary" full className="mt10" />

			</> }

			{ tab === 2 && <>

				<KarcinTable />

			</> }

			{ tab === 3 && <>

				<div className="divCodeHeader mt32"><span><i></i><i></i><i></i></span></div>
				<div className="divCode"><SyntaxHighlighter language="jsx" style={codeStyle}>{codeString}</SyntaxHighlighter></div>

			</> }

			{ tab === 4 && <>

				<div className="componentH2">{ getLangText('ikonDonusturme') }</div>
				<p className="normalP mt5" dangerouslySetInnerHTML={{ __html: getLangText('ikonDonusturmeBaslangic') }} />

				<div className="divCodeHeader"><span><i></i><i></i><i></i></span></div>
				<div className="divCode"><SyntaxHighlighter language="bash" style={codeStyle}>{codeStringIkon}</SyntaxHighlighter></div>

				<p className="normalP mt20" dangerouslySetInnerHTML={{ __html: getLangText('ikonDonusturmeSVG') }} />

				<div className="divCodeHeader"><span><i></i><i></i><i></i></span></div>
				<div className="divCode"><SyntaxHighlighter language="html" style={codeStyle}>{codeStringIkonSVG}</SyntaxHighlighter></div>

				<p className="normalP mt20" dangerouslySetInnerHTML={{ __html: getLangText('ikonDonusturmeCommand') }} />

				<div className="divCodeHeader"><span><i></i><i></i><i></i></span></div>
				<div className="divCode"><SyntaxHighlighter language="bash" style={codeStyle}>{codeStringCommand}</SyntaxHighlighter></div>

				<Alert type="info" text={ getLangText('ikonDonusturmeAlert') } className="mt20" />

				<p className="normalP mt10" dangerouslySetInnerHTML={{ __html: getLangText('ikonDonusturmeApple') }} />

				<div className="divCodeHeader"><span><i></i><i></i><i></i></span></div>
				<div className="divCode"><SyntaxHighlighter language="jsx" style={codeStyle}>{codeStringApple}</SyntaxHighlighter></div>

				<p className="normalP mt10" dangerouslySetInnerHTML={{ __html: getLangText('ikonDonusturmeSonuc') }} />

			</> }

		</div>
	);

}

const SvgApple = () => {
	return(
		<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 384 512" height="1em" width="1em" className="idb">
			<path d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" stroke="none" />
		</svg>
	);
}

const SvgCheck = () => {
	return(
		<svg width="1em" height="1em" viewBox="0 0 12 16" fill="currentColor" className="idb">
			<path fillRule="evenodd" d="M12 5l-8 8-4-4 1.5-1.5L4 10l6.5-6.5L12 5z" />
		</svg>
	);
}

const SvgTrash = () => {
	return(
		<svg stroke="currentColor" fill="currentColor" strokeWidth={0} viewBox="0 0 512 512" height="1em" width="1em" className="idb">
			<path d="M128 405.429C128 428.846 147.198 448 170.667 448h170.667C364.802 448 384 428.846 384 405.429V160H128v245.429zM416 96h-80l-26.785-32H202.786L176 96H96v32h320V96z" stroke="none" />
		</svg>
	);
}

const optional = () => <span className="optional">{ getLangText('optionalWrite') }</span>;
const required = () => <span className="required">{ '* ' + getLangText('requiredWrite') }</span>;

const KarcinTable = () => {

	const [table, setTable] = useState([
		{ propertyName: 'text', required: optional(), type: 'string', description: getLangText('propsText') },
		{ propertyName: 'color', required: optional(), type: "'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'dark' | 'danger' | 'cancel'", description: getLangText('propsColor') },
		{ propertyName: 'size', required: optional(), type: "'default' | 'medium' | 'small' | 'extraSmall'", description: getLangText('propsSize') },
		{ propertyName: 'icon', required: optional(), type: "React.ReactNode | 'string'", description: getLangText('propsButtonIcon') },
		{ propertyName: 'full', required: optional(), type: 'boolean', description: getLangText('propsFull') },
		{ propertyName: 'disable', required: optional(), type: 'boolean', description: getLangText('propsDisable') },
		{ propertyName: 'className', required: optional(), type: 'string', description: getLangText('propsClassName') },
		{ propertyName: 'onClick', required: optional(), type: 'function | () => { }', description: getLangText('propsOnClick') }
	]);

	return <PropsTable table={table} />;

}

export default ButtonPage;