import React, { useState, useEffect } from 'react';
import { Table, Input } from 'semantic-ui-react';
import ProductService from '../services/productService';
import Pagination from '../components/Pagination';
import DropdownPlatform from '../components/DropdownPlatform';
import DatePickerDate from '../components/DatePickerDate';
import '../styles/productList.css';

export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [searchFilter, setSearchFilter] = useState('');
	const [platformFilter] = useState([]);
	const [dateFilter] = useState(new Date());
	const [showPerPage] = useState(10);

	const [pagination, setPagination] = useState({
		start: 0,
		end: showPerPage,
	});
	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end });
	};

	useEffect(() => {
		let productService = new ProductService();
		productService.getProducts().then((result) => setProducts(result.data.data));
	}, []);

	return (
		<div>
			<Table celled>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>
							App <br />
							<br />
							<Input
								icon="search"
								placeholder="Search an app"
								onChange={(e) => {
									setSearchFilter(e.target.value);
								}}
							/>
						</Table.HeaderCell>
						<Table.HeaderCell>
							Platform <br />
							<br />
							<DropdownPlatform />
						</Table.HeaderCell>
						<Table.HeaderCell>
							Date <br />
							<br />
							<DatePickerDate />
						</Table.HeaderCell>
						<Table.HeaderCell>Impressions</Table.HeaderCell>
						<Table.HeaderCell>Clicks</Table.HeaderCell>
						<Table.HeaderCell>Installs</Table.HeaderCell>
						<Table.HeaderCell>DAU</Table.HeaderCell>
					</Table.Row>
				</Table.Header>

				<Table.Body>
					{products
						.filter((product) => {
							if (searchFilter === '') {
								return product;
							} else if (product.app.toLowerCase().includes(searchFilter.toLowerCase())) {
								return product;
							}
							return null;
						})
						.filter((product) => {
							if (platformFilter === '') {
								return product;
							} else if (product.platform.toString().includes(platformFilter.toString())) {
								return product;
							}
							return product;
						})
						.filter((product) => {
							if (dateFilter) {
								return product;
							} else if (product.date.includes(dateFilter)) {
								return product;
							}
							return product;
						})
						.slice(pagination.start, pagination.end)
						.map((product, key) => (
							<Table.Row key={key}>
								<Table.Cell>{product.app}</Table.Cell>
								<Table.Cell>{product.platform}</Table.Cell>
								<Table.Cell>{product.date}</Table.Cell>
								<Table.Cell>{product.impressions}</Table.Cell>
								<Table.Cell>{product.clicks}</Table.Cell>
								<Table.Cell>{product.installs}</Table.Cell>
								<Table.Cell>{product.dau}</Table.Cell>
							</Table.Row>
						))}
				</Table.Body>

				<Table.Footer>
					<Table.Row>
						<Table.HeaderCell colSpan="7">
							<Pagination showPerPage={showPerPage} onPaginationChange={onPaginationChange} />
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		</div>
	);
}
