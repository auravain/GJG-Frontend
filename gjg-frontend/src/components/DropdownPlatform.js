import React from 'react';
import { Dropdown } from 'semantic-ui-react';

export default function DropdownPlatform({ setPlatformFilter }) {
	const options = [
		{ key: 1, text: 'iOS', icon: 'apple', value: 1 },
		{ key: 2, text: 'Android', icon: 'android', value: 2 },
	];

	return (
		<div>
			<Dropdown
				clearable
				options={options}
				placeholder="Select a platform"
				selection
				style={{ fontSize: '15px', fontWeight: 'normal', width: '12em' }}
				onChange={(e) => {
					setPlatformFilter(e.target.textContent);
					console.log('selected' + e);
				}}
			/>
		</div>
	);
}
