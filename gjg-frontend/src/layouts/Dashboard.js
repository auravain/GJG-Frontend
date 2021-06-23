import React, { useState } from 'react';
import ProductList from '../pages/ProductList';
import '../styles/dashboard.css';

export default function Dashboard() {
	//const [count, setCount] = useState(0);
	//const [clicked, setClicked] = useState(false);
	const [table, setTable] = useState(false);
	const onClick = () => {
		setTable(true);
	};
	/* 	function isClicked(e) {
		e.preventDefault();
		setCount(count + 1);
		setClicked(true);
		console.log('clicked');
		setTable(true);
	}
	} */
	return (
		<div className="dash-style">
			<button className="button" onClick={onClick}>
				Change View of Data
			</button>
			{table ? <ProductList /> : null}
		</div>
	);
}
