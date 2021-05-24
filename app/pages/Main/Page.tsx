import React, { useState, useEffect } from 'react';
import { getLangText, Icons } from '../../support';
import { Button } from 'karcin-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeStyle from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import moment from 'moment';
import './style.scss';

const Main = (props) => {

	const [version, setVersion] = useState(localStorage.getItem('version'));
	const [versionDate, setVersionDate] = useState('');
	const [button, setButton] = useState('Merhaba Dünya!');

	const resize = () => {
		setButton( window.innerWidth <= 380 ? 'Merhaba' : 'Merhaba Dünya!' );
	}

	useEffect(() => {
		props.scrollTop();

		window.addEventListener('resize', resize);
		resize();

		const versionDate = localStorage.getItem('versionDate');

		if ( version === '[version]' ) setVersion('Development');

		if ( versionDate === '[versionDate]' ){
			setVersionDate( moment().format('DD.MM.YYYY HH:mm:ss') );
		}else{
			setVersionDate( moment(parseInt(versionDate)).format('DD.MM.YYYY HH:mm:ss') );
		}

		return () => { window.removeEventListener('resize', resize); }

	}, []);

	const codeString = `npm install --save karcin-ui`;
	const codeStringButton = `import React from 'react';
import { Button } from 'karcin-ui';

const Page = () => {

	return(
		<div className="flex mt20">
			<Button text="Merhaba Dünya!" />
			<Button text="Karçin UI" color="dark" className="ml20" />
		</div>
	);

}

export default Page;`;

	return(
		<div className="wrapper">

			<div className="componentH1">{ getLangText('anaBaslik') }</div>
			<pre className="versionP">{ getLangText('versiyon') + ': ' + version + '	' + getLangText('versiyonTarihi') + ': ' + versionDate }</pre>
			<p className="normalP mt10 mobileP">{ getLangText('versiyon') + ': ' + version }</p>
			<p className="normalP mt10 mobileP">{ getLangText('versiyonTarihi') + ': ' + versionDate }</p>
			<p className="normalP mt10" dangerouslySetInnerHTML={{ __html: getLangText('anaMetin') }} />

			<div className="componentH2">{ getLangText('getStarted') }</div>
			<p className="normalP mt5" dangerouslySetInnerHTML={{ __html: getLangText('npmileKurun') }} />

			<div className="divCodeHeader"><span><i></i><i></i><i></i></span></div>
			<div className="divCode"><SyntaxHighlighter language="bash" style={codeStyle}>{codeString}</SyntaxHighlighter></div>

			<div className="componentH2">{ getLangText('hizliBirOrnek') }</div>
			<p className="normalP mt5" dangerouslySetInnerHTML={{ __html: getLangText('buttonOrnekMetin') }} />

			<div className="flex mt20">
				<Button text={button} />
				<Button text="Karçin UI" color="dark" className="ml20" />
			</div>

			<div className="divCodeHeader"><span><i></i><i></i><i></i></span></div>
			<div className="divCode"><SyntaxHighlighter language="jsx" style={codeStyle}>{codeStringButton}</SyntaxHighlighter></div>

		</div>
	);

}

export default Main;