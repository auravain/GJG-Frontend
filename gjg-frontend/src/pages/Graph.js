import React, { useState, useEffect } from 'react';
import ProductService from '../services/productService';
import { Line } from 'react-chartjs-2';

function Graph() {
	const [products, setProducts] = useState([]);
	console.log(products);
	const dates = [];
	const clicks = [];
	const impressions = [];
	const installs = [];
	const dau = [];

	if (products.length > 0) {
		for (let i = 0; i < 50; i++) {
			dates.push(products[i].date);
		}
		for (let i = 0; i < 50; i++) {
			clicks.push(products[i].clicks);
		}
		for (let i = 0; i < 50; i++) {
			impressions.push(products[i].impressions);
		}
		for (let i = 0; i < 50; i++) {
			installs.push(products[i].installs);
		}
		for (let i = 0; i < 50; i++) {
			dau.push(products[i].dau);
		}
	}

	useEffect(() => {
		let productService = new ProductService();
		productService.getProducts().then((result) => setProducts(result.data.data));
	}, []);

	return (
		<div>
			<Line
				style={{
					backgroundColor: '#F9FAFB',
					borderRadius: '0.5em',
					border: 'solid',
					borderWidth: '0.1em',
					borderColor: '#DEDEDF',
					padding: '2em',
					boxShadow:
						'inset 0px 3px 5px rgba(255, 255, 255, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.274)',
				}}
				data={{
					labels: dates,
					datasets: [
						{
							label: 'Clicks',
							data: clicks,
							fill: false,
							backgroundColor: 'rgb(255, 99, 132)',
							borderColor: 'rgba(255, 99, 132, 0.2)',
						},
						{
							label: 'Impressions',
							data: impressions,
							fill: false,
							hidden: true,
							backgroundColor: 'rgb(58,51,97)',
							borderColor: 'rgba(58,51,97,0.2)',
						},
						{
							label: 'Installs',
							data: installs,
							fill: false,
							hidden: true,
							backgroundColor: 'rgb(128,0,0)',
							borderColor: 'rgba(128,0,0,0.2)',
						},
						{
							label: 'DAU',
							data: dau,
							fill: false,
							hidden: true,
							backgroundColor: 'rgb(209,156,76)',
							borderColor: 'rgba(209,156,76,0.2)',
						},
					],
				}}
			/>
		</div>
	);
}

export default Graph;
