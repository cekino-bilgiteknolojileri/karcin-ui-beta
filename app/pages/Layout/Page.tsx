import React, { useEffect, useState } from 'react';
import { getLangText } from '../../support';
import { HeaderTab, Layout, Button } from 'karcin-ui';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import codeStyle from 'react-syntax-highlighter/dist/esm/styles/prism/atom-dark';
import './style.scss';
import codeString from './codeString';
import PropsTable from '../PropsTable';

const LayoutPage = (props) => {

	const [tab, setTab] = useState(1);

	const [state, setState] = useState(true);

	useEffect(() => {
		props.scrollTop();
	}, []);

	return(
		<div className="wrapper">

			<div className="componentH1">Layout</div>
			<p className="normalP mt10 mb20" dangerouslySetInnerHTML={{ __html: getLangText('layoutMetin') }} />

			<HeaderTab activeTab={tab} changeTab={setTab} tabs={[ getLangText('ornekler'), getLangText('ozellikleri'), getLangText('kaynakKod') ]} />

			{ tab === 1 && <>

				<div className="componentH2">{ getLangText('basitKullanim') }</div>
				<div className="solidBackground">
					
					<Layout title="Cupcake">
						<p>Marshmallow liquorice fruitcake chocolate cake chocolate cake. Icing muffin chocolate bar. Cake caramels marshmallow tart gummi bears carrot cake candy. Cookie gummies sugar plum tart soufflé. Donut marzipan carrot cake icing. Chocolate cake cheesecake tiramisu marshmallow sweet roll.</p>
						<p>Tart jelly dragée chocolate cake. Cupcake carrot cake brownie marshmallow dragée fruitcake icing. Apple pie tart dessert cake tiramisu pie. Cookie lemon drops jelly beans ice cream lollipop cake pudding toffee. Chocolate pastry jujubes cake jelly-o.</p>
						<Button text="Button" className="mt20" />
					</Layout>

				</div>

				<div className="componentH2">{ getLangText('buttonBeraberKullanim') }</div>
				<div className="solidBackground">
					
					<Layout title="Cupcake" rightType="button" rightButtonText="CHANGE STATUS" rightButtonState={state} rightButtonFunction={() => setState(!state)}>
						<p>Sesame snaps oat cake jelly-o pie cookie. Wafer bonbon cotton candy chupa chups oat cake jelly jelly. Chocolate cake bonbon macaroon. Marzipan biscuit gingerbread macaroon marshmallow candy canes. Cake chocolate cake powder sugar plum caramels.</p>
					</Layout>

				</div>

				<div className="componentH2">{ getLangText('switchBeraberKullanim') }</div>
				<div className="solidBackground">
					
					<Layout title="Cupcake" rightType="switch" rightButtonState={!state} rightButtonFunction={() => setState(!state)}>
						<p>Sesame snaps oat cake jelly-o pie cookie. Wafer bonbon cotton candy chupa chups oat cake jelly jelly. Chocolate cake bonbon macaroon. Marzipan biscuit gingerbread macaroon marshmallow candy canes. Cake chocolate cake powder sugar plum caramels.</p>
					</Layout>

				</div>

				<div className="componentH2">{ getLangText('yaziBeraberKullanim') }</div>
				<div className="solidBackground">
					
					<Layout title="Cupcake" rightType="text" rightText="Last update: 1 min ago">
						<p>Marshmallow liquorice fruitcake chocolate cake chocolate cake. Icing muffin chocolate bar. Cake caramels marshmallow tart gummi bears carrot cake candy. Cookie gummies sugar plum tart soufflé. Donut marzipan carrot cake icing. Chocolate cake cheesecake tiramisu marshmallow sweet roll.</p>
						<p>Tart jelly dragée chocolate cake. Cupcake carrot cake brownie marshmallow dragée fruitcake icing. Apple pie tart dessert cake tiramisu pie. Cookie lemon drops jelly beans ice cream lollipop cake pudding toffee. Chocolate pastry jujubes cake jelly-o.</p>
					</Layout>

				</div>

				<div className="componentH2">{ getLangText('yaziButtonBeraberKullanim') }</div>
				<div className="solidBackground">
					
					<Layout title="Cupcake" rightType="textButton" rightText="Change Status" rightButtonFunction={() => setState(!state)}>
						<p>Marshmallow liquorice fruitcake chocolate cake chocolate cake. Icing muffin chocolate bar. Cake caramels marshmallow tart gummi bears carrot cake candy. Cookie gummies sugar plum tart soufflé. Donut marzipan carrot cake icing. Chocolate cake cheesecake tiramisu marshmallow sweet roll.</p>
						<p>Tart jelly dragée chocolate cake. Cupcake carrot cake brownie marshmallow dragée fruitcake icing. Apple pie tart dessert cake tiramisu pie. Cookie lemon drops jelly beans ice cream lollipop cake pudding toffee. Chocolate pastry jujubes cake jelly-o.</p>
					</Layout>

				</div>

				<div className="componentH2">{ getLangText('icerikBeraberKullanim') }</div>
				<div className="solidBackground">
					
					<Layout title="Cupcake" contentStyle={{ padding: 40, backgroundColor: '#f1f7ff', borderColor: '#cedbec' }}>
						<p>Marshmallow liquorice fruitcake chocolate cake chocolate cake. Icing muffin chocolate bar. Cake caramels marshmallow tart gummi bears carrot cake candy. Cookie gummies sugar plum tart soufflé. Donut marzipan carrot cake icing. Chocolate cake cheesecake tiramisu marshmallow sweet roll.</p>
					</Layout>

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
		{ propertyName: 'children', required: optional(), type: 'React.ReactNode', description: getLangText('propsChildren') },
		{ propertyName: 'title', required: optional(), type: 'string', description: getLangText('propsTitle') },
		{ propertyName: 'rightType', required: optional(), type: "'button' | 'switch' | 'text' | 'textButton'", description: getLangText('propsRightType') },
		{ propertyName: 'rightText', required: optional(), type: 'string', description: getLangText('propsRightText') },
		{ propertyName: 'rightButtonState', required: optional(), type: 'boolean', description: getLangText('propsRightButtonState') },
		{ propertyName: 'rightButtonFunction', required: optional(), type: 'function | () => { }', description: getLangText('propsRightButtonFunction') },
		{ propertyName: 'rightButtonText', required: optional(), type: 'string', description: getLangText('propsRightButtonText') },
		{ propertyName: 'contentStyle', required: optional(), type: 'object', description: getLangText('propsContentStyle') },
		{ propertyName: 'className', required: optional(), type: 'string', description: getLangText('propsClassName') }
	]);

	return <PropsTable table={table} />;

}

export default LayoutPage;