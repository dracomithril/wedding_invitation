import Home from '../routes/home';
import { Router } from 'preact-router';
import Guests from '../routes/guests';
import { Component } from 'react';

export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = event => {
		this.currentUrl = event.url;
	};

	render() {
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
}
