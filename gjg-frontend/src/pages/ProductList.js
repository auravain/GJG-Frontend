import React, { useState, useEffect } from 'react';
import { Table, Input, Grid } from 'semantic-ui-react';
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
	//const [sorting, setSorting] = useState('asc');
	const [app, setApp] = useState(true);
	const [platform, setPlatform] = useState(true);
	const [date, setDate] = useState(false);
	const [impressions, setImpressions] = useState(false);
	const [clicks, setClicks] = useState(false);
	const [installs, setInstalls] = useState(false);
	const [dau, setDau] = useState(false);

	const [pagination, setPagination] = useState({
		start: 0,
		end: showPerPage,
	});
	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end });
	};

	const getData = async () => {
		let productService = await new ProductService();
		await productService.getProducts().then((result) => setProducts(result.data.data));
	};
	useEffect(() => {
		getData();
	}, []);

	const metricColumns = [
		{ visible: impressions, name: 'Impressions', icon: <SortButton products={products} /> },
		{ visible: clicks, name: 'Clicks', icon: <SortButton products={products} /> },
		{ visible: installs, name: 'Installs', icon: <SortButton products={products} /> },
		{ visible: dau, name: 'DAU', icon: <SortButton products={products} /> },
	];

	return (
		<div>
			<Grid>
				<Grid.Row>
					<Grid.Column width={14}>
						<Table celled>
							<Table.Header>
								<Table.Row>
									<Table.HeaderCell style={app ? { display: 'none' } : null}>
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
									<Table.HeaderCell style={platform ? { display: 'none' } : null}>
										Platform <br />
										<br />
										<DropdownPlatform setPlatformFilter={setPlatformFilter} />
									</Table.HeaderCell>
									<Table.HeaderCell style={date ? { display: 'none' } : null}>
										Date <br />
										<br />
										<DatePickerDate dateFilter={dateFilter} setDateFilter={setDateFilter} />
									</Table.HeaderCell>
									{metricColumns.map((metricColumn, i) => (
										<Table.HeaderCell
											style={metricColumn.visible ? { display: 'none' } : null}
											key={i}
										>
											{metricColumn.name} <br />
											{metricColumn.icon}
										</Table.HeaderCell>
									))}
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
											<Table.Cell style={app ? { display: 'none' } : null}>
												{product.app}
											</Table.Cell>
											<Table.Cell style={platform ? { display: 'none' } : null}>
												{product.platform}
											</Table.Cell>
											<Table.Cell style={date ? { display: 'none' } : null}>
												{product.date}
											</Table.Cell>
											<Table.Cell style={impressions ? { display: 'none' } : null}>
												{product.impressions}
											</Table.Cell>
											<Table.Cell style={clicks ? { display: 'none' } : null}>
												{product.clicks}
											</Table.Cell>
											<Table.Cell style={installs ? { display: 'none' } : null}>
												{product.installs}
											</Table.Cell>
											<Table.Cell style={dau ? { display: 'none' } : null}>
												{product.dau}
											</Table.Cell>
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
						<Categories
							setApp={setApp}
							setPlatform={setPlatform}
							setDate={setDate}
							setImpressions={setImpressions}
							setClicks={setClicks}
							setInstalls={setInstalls}
							setDau={setDau}
							app={app}
							platform={platform}
							date={date}
							impressions={impressions}
							clicks={clicks}
							installs={installs}
							dau={dau}
						/>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</div>
	);
}
