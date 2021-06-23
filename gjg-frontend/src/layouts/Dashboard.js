import React, { useState } from 'react';
import ProductList from '../pages/ProductList';
import Graph from '../pages/Graph';
import '../styles/dashboard.css';

export default function Dashboard() {
	const [table, setTable] = useState(false);

	const onClick = () => {
		setTable(!table);
	};

	return (
		<div className="dash-style">
			<button className="button" onClick={onClick}>
				Change View of Data
			</button>
			{table ? <ProductList /> : <Graph />}
		</div>
	);
}
