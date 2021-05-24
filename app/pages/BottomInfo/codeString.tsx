const codeString = `import React from 'react';
import { getLangText } from '../../support';
import { BottomInfo } from 'karcin-ui';

const BottomInfoPage = () => {

	return <>

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

	</>;

}

export default BottomInfoPage;
`;

export default codeString;