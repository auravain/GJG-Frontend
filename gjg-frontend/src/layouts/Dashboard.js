import React, { useState } from 'react';
import { Button } from 'semantic-ui-react';
import ProductList from '../pages/ProductList';
import 'semantic-ui-css/semantic.min.css';

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
		<div>
			<Button style={{ marginTop: '1em', marginBottom: '1em' }} onClick={onClick}>
				Change View of Data
			</Button>
			{table ? <ProductList /> : null}
		</div>
	);
}
