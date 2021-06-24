import React from 'react';
import { Checkbox, Menu } from 'semantic-ui-react';

function Categories() {
	return (
		<div>
			<Menu
				style={{
					width: '10em',
					textAlign: 'left',
					boxShadow:
						'inset 0px 3px 5px rgba(255, 255, 255, 0.5), 0px 0px 10px rgba(0, 0, 0, 0.274)',
				}}
				vertical
			>
				<Menu.Item>
					<Checkbox style={{ paddingRight: '1.5em', paddingTop: '0.2em' }} defaultChecked />
					App
				</Menu.Item>
				<Menu.Item>
					<Checkbox style={{ paddingRight: '1.5em', paddingTop: '0.2em' }} defaultChecked />
					Platform
				</Menu.Item>
				<Menu.Item>
					<Checkbox style={{ paddingRight: '1.5em', paddingTop: '0.2em' }} defaultChecked />
					Date
				</Menu.Item>
				<Menu.Item>
					<Checkbox style={{ paddingRight: '1.5em', paddingTop: '0.2em' }} />
					Impressions
				</Menu.Item>
				<Menu.Item>
					<Checkbox style={{ paddingRight: '1.5em', paddingTop: '0.2em' }} />
					Clicks
				</Menu.Item>
				<Menu.Item>
					<Checkbox style={{ paddingRight: '1.5em', paddingTop: '0.2em' }} />
					Installs
				</Menu.Item>
				<Menu.Item>
					<Checkbox style={{ paddingRight: '1.5em', paddingTop: '0.2em' }} />
					DAU
				</Menu.Item>
			</Menu>
		</div>
	);
}

export default Categories;