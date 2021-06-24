import React, { useState } from 'react';
import { Icon, Menu } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

const Pagination = ({ showPerPage, onPaginationChange }) => {
	const [counter, setCounter] = useState(1);

/* 	useEffect(() => {
		const value = showPerPage * counter;
		onPaginationChange(value - showPerPage, value);
	}, [counter, showPerPage, onPaginationChange]);
 */
	return (
		<div>
			<Menu pagination>
				<Menu.Item as="a" icon onClick={() => setCounter(counter - 1)}>
					<Icon name="chevron left" />
				</Menu.Item>
				<Menu.Item as="a">1</Menu.Item>
				<Menu.Item as="a">2</Menu.Item>
				<Menu.Item as="a">3</Menu.Item>
				<Menu.Item as="a">4</Menu.Item>
				<Menu.Item as="a" icon onClick={() => setCounter(counter + 1)}>
					<Icon name="chevron right" />
				</Menu.Item>
			</Menu>
		</div>
	);
};
export default Pagination;
