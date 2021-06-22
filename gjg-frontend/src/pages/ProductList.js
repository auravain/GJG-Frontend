import React, { useState, useEffect } from 'react';
import { Table, Input, Dropdown } from 'semantic-ui-react';
import ProductService from '../services/productService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../pages/productList.css';
import Pagination from '../components/Pagination';

export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [searchFilter, setSearchFilter] = useState('');
	const [platformFilter, setPlatformFilter] = useState([]);
	const [dateFilter, setDateFilter] = useState(new Date());
	const [showPerPage] = useState(10);

	const [pagination, setPagination] = useState({
		start: 0,
		end: showPerPage,
	});
	const onPaginationChange = (start, end) => {
		setPagination({ start: start, end: end });
	};

	const options = [
		{ key: 1, text: 'iOS', icon: 'apple', value: 1 },
		{ key: 2, text: 'Android', icon: 'android', value: 2 },
	];

	const DropdownClearable = () => (
		<Dropdown
			clearable
			options={options}
			placeholder="Select a platform"
			selection
			style={{ fontSize: '15px', fontWeight: 'normal' }}
			onChange={(e) => {
				setPlatformFilter(e);
				console.log('selected' + e);
			}}
		/>
	);

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
							<DropdownClearable />
						</Table.HeaderCell>
						<Table.HeaderCell>
							Date <br />
							<br />
							<DatePicker
								className="date-picker"
								dateFormat="yyyy-MM-dd"
								placeholderText="Select a date"
								selected={dateFilter}
								onChange={(date) => {
									setDateFilter(date);
									console.log('selected ' + date);
								}}
								filterDate={(date) => {
									return new Date() > date;
								}}
								isClearable
								showMonthDropdown
								showYearDropdown
								dropdownMode="select"
								//withPortal
							/>
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

				<Table.Footer style={{ textAlign: 'center' }}>
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
