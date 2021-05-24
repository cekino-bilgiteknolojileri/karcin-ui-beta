const codeString = `import React from 'react';
import { getLangText } from '../../support';
import { Alert } from 'karcin-ui';

const AlertPage = () => {

	return <>

		<div className="componentH2">{ getLangText('basitKullanim') }</div>
		<Alert type="success" text="Signed in successfully, you are being redirected." className="mt10" />
		<Alert type="error" text={ <span>Username or password is incorrect. <a>Try again.</a></span> } className="mt10" />
		<Alert type="warning" text="No users were found." className="mt10" />
		<Alert type="info" text="You can browse the document for more features." className="mt10" />

	</>;

}

export default AlertPage;
`;

export default codeString;