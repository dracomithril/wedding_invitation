import Home from '../routes/home';
import { Router } from 'preact-router';
import Guests from '../routes/guests';

export default function App() {
	return (
		<div id="app">
			<Router onChange={this.handleRoute}>
				<Guests path="/guests" />
				<Home path="/" />
				<Home path="/:guests" />
			</Router>
		</div>
	);
}
