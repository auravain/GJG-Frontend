import React, { useState, useEffect } from 'react';
import { Table, Input, Grid, Dropdown, Button } from 'semantic-ui-react';
import ProductService from '../services/productService';
import Pagination from '../components/Pagination';
import DropdownPlatform from '../components/DropdownPlatform';
import DatePickerDate from '../components/DatePickerDate';
import Categories from '../pages/Categories';
import SortButton from '../components/SortButton';
import '../styles/productList.css';

export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [searchFilter, setSearchFilter] = useState('');
	const [platformFilter, setPlatformFilter] = useState('');
	const [dateFilter, setDateFilter] = useState(new Date());
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
			<Grid>
				<Grid.Row>
					<Grid.Column width={14}>
						<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell>
										App <br />
										<br />
										<Input
											style={{ width: '12em' }}
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
										<DropdownPlatform setPlatformFilter={setPlatformFilter} />
									</Table.HeaderCell>
									<Table.HeaderCell>
										Date <br />
										<br />
										<DatePickerDate dateFilter={dateFilter} setDateFilter={setDateFilter} />
									</Table.HeaderCell>
									<Table.HeaderCell>
										Impressions <br />
										<SortButton />
									</Table.HeaderCell>
									<Table.HeaderCell>
										Clicks
										<br />
										<SortButton />
									</Table.HeaderCell>
									<Table.HeaderCell>
										Installs
										<br />
										<SortButton />
									</Table.HeaderCell>
									<Table.HeaderCell>
										DAU
										<br />
										<SortButton />
									</Table.HeaderCell>
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
										} else if (product.platform === platformFilter) {
											return product;
										}
										return null;
									})
									.filter((product) => {
										if (dateFilter === null || dateFilter.getDay() === new Date().getDay()) {
											return product;
										} else if (
											product.date ===
											dateFilter
												.toLocaleDateString()
												.replaceAll('.', '-')
												.split('-')
												.reverse()
												.join('-')
										) {
											return product;
										}
										return null;
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
					</Grid.Column>
					<Grid.Column width={2}>
						<Categories />
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
