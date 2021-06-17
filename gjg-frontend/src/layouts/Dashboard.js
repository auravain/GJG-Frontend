import React from 'react';
import { Button } from 'semantic-ui-react';
import ProductList from '../pages/ProductList';

export default function Dashboard() {
	return (
		<div>
			<Button style={{ marginTop: '1em', marginBottom: '1em' }}>Change Data</Button>
			<ProductList />
		</div>
	);
}
