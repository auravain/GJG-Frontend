import React, { useState, useEffect } from 'react';
import { Table, Icon, Menu, Input, Dropdown } from 'semantic-ui-react';
import ProductService from '../services/productService';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import '../pages/productList.css';

export default function ProductList() {
	const [products, setProducts] = useState([]);
	const [startDate, setStartDate] = useState(new Date());
	const options = [
		{ key: 1, text: 'iOS', value: 1 },
		{ key: 2, text: 'Android', value: 2 },
	];
	const DropdownClearable = () => (
		<Dropdown
			clearable
			options={options}
			placeholder="Select a platform"
			selection
			style={{ fontSize: '15px', fontWeight: 'normal' }}
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
							<Input icon="search" placeholder="Search an app" />
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
								selected={startDate}
								onChange={(date) => setStartDate(date)}
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
					{products.map((product) => (
						<Table.Row>
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
							<Menu pagination>
								<Menu.Item as="a" icon>
									<Icon name="chevron left" />
								</Menu.Item>
								<Menu.Item as="a">1</Menu.Item>
								<Menu.Item as="a">2</Menu.Item>
								<Menu.Item as="a">3</Menu.Item>
								<Menu.Item as="a">4</Menu.Item>
								<Menu.Item as="a" icon>
									<Icon name="chevron right" />
								</Menu.Item>
							</Menu>
						</Table.HeaderCell>
					</Table.Row>
				</Table.Footer>
			</Table>
		</div>
	);
}
