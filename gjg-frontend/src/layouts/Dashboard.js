import React from 'react';
import { Button } from 'semantic-ui-react';
import ProductList from '../pages/ProductList';

export default function Dashboard() {
	return (
		<div>
			<Button style={{ marginTop: '0.5em', marginBottom: '0.7em' }}>Change Data</Button>
			<ProductList />
		</div>
	);
}
