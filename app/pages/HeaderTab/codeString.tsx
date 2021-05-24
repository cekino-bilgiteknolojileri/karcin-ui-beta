const codeString = `import React from 'react';
import { getLangText } from '../../support';
import { HeaderTab } from 'karcin-ui';

const HeaderTabPage = () => {

	const [tabExample, setTabExample] = useState(1);

	return <>

		<div className="componentH2">{ getLangText('basitKullanim') }</div>
		<div className="solidBackground">

			<HeaderTab activeTab={tabExample} changeTab={setTabExample} tabs={[ 'Tab Example 1', 'Tab Example 2', 'Tab Example 3', 'Tab Example 4', 'Tab Example 5' ]} />

			{ tabExample === 1 && <p>Tab content: { tabExample }</p> }
			{ tabExample === 2 && <p>Tab content: { tabExample }</p> }
			{ tabExample === 3 && <p>Tab content: { tabExample }</p> }
			{ tabExample === 4 && <p>Tab content: { tabExample }</p> }
			{ tabExample === 5 && <p>Tab content: { tabExample }</p> }

		</div>

	</>;

}

export default HeaderTabPage;
`;

export default codeString;