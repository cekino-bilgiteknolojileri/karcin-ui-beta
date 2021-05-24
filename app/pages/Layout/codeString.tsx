const codeString = `import React from 'react';
import { getLangText } from '../../support';
import { Layout, Button } from 'karcin-ui';

const LayoutPage = () => {

	const [state, setState] = useState(true);

	return <>

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

	</>;

}

export default LayoutPage;
`;

export default codeString;