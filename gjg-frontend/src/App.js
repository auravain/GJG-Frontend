import './styles/App.css';
import Dashboard from './layouts/Dashboard';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';

function App() {
	return (
		<div className="App">
			<Container className="main">
				<Dashboard />
			</Container>
		</div>
	);
}

export default App;
