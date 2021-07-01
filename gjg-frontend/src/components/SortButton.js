import React from 'react';
import { Button, Icon } from 'semantic-ui-react';

function SortButton() {
	return (
		<div>
			<Button
				style={{
					border: 'none',
					backgroundColor: '#f9fafb',
					textAlign: 'center',
					fontSize: '0.9em',
					marginTop: '1em',
					paddingRight: '1em',
					paddingLeft: '1em',
				}}
			>
				<Icon id="icon" name="arrow up" style={{ fontSize: '1.5em' }} />
				{/* {onClick ? 'arrow up' : 'arrow down'} */}
			</Button>
		</div>
	);
}

export default SortButton;
