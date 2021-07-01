import React from 'react';
import { Checkbox, Menu } from 'semantic-ui-react';

function Categories({
	app,
	platform,
	date,
	impressions,
	clicks,
	dau,
	installs,
	setApp,
	setPlatform,
	setDate,
	setImpressions,
	setClicks,
	setInstalls,
	setDau,
}) {
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
					<Checkbox
						onClick={() => setApp(!app)}
						style={{ paddingRight: '1.5em', paddingTop: '0.2em' }}
					/>
					App
				</Menu.Item>
				<Menu.Item>
					<Checkbox
						onClick={() => setPlatform(!platform)}
						style={{ paddingRight: '1.5em', paddingTop: '0.2em' }}
					/>
					Platform
				</Menu.Item>
				<Menu.Item>
					<Checkbox
						onClick={() => setDate(!date)}
						style={{ paddingRight: '1.5em', paddingTop: '0.2em' }}
						defaultChecked
					/>
					Date
				</Menu.Item>
				<Menu.Item>
					<Checkbox
						onClick={() => setImpressions(!impressions)}
						style={{ paddingRight: '1.5em', paddingTop: '0.2em' }}
						defaultChecked
					/>
					Impressions
				</Menu.Item>
				<Menu.Item>
					<Checkbox
						onClick={() => setClicks(!clicks)}
						style={{ paddingRight: '1.5em', paddingTop: '0.2em' }}
						defaultChecked
					/>
					Clicks
				</Menu.Item>
				<Menu.Item>
					<Checkbox
						onClick={() => setInstalls(!installs)}
						style={{ paddingRight: '1.5em', paddingTop: '0.2em' }}
						defaultChecked
					/>
					Installs
				</Menu.Item>
				<Menu.Item>
					<Checkbox
						onClick={() => setDau(!dau)}
						style={{ paddingRight: '1.5em', paddingTop: '0.2em' }}
						defaultChecked
					/>
					DAU
				</Menu.Item>
			</Menu>
		</div>
	);
}

export default Categories;
