import React from 'react';
import { Table } from 'semantic-ui-react';

export default function ProductList() {
	return (
		<div>
			<Table>
				<Table.Header>
					<Table.Row>
						<Table.HeaderCell>App</Table.HeaderCell>
						<Table.HeaderCell>Platform</Table.HeaderCell>
						<Table.HeaderCell>Date</Table.HeaderCell>
						<Table.HeaderCell>Impressions</Table.HeaderCell>
						<Table.HeaderCell>Clicks</Table.HeaderCell>
						<Table.HeaderCell>Installs</Table.HeaderCell>
						<Table.HeaderCell>DAU</Table.HeaderCell>
					</Table.Row>
				</Table.Header>
				<Table.Body></Table.Body>
			</Table>
		</div>
	);
}
