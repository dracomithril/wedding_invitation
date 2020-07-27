import { Component } from 'preact';
import { Router } from 'preact-router';
import Home from '../routes/home';
import Guests from '../routes/guests';
import { Footer } from './Footer';
import Accommodation from '../routes/accommodation';
import React from 'preact/compat';


export default class App extends Component {

	/** Gets fired when the route changes.
	 *	@param {Object} event		"change" event from [preact-router](http://git.io/preact-router)
	 *	@param {string} event.url	The newly routed URL
	 */
	handleRoute = event => {
	  this.currentUrl = event.url;
	};

	componentDidMount() {
		// eslint-disable-next-line no-console
		console.log(`%ccurrent app version: ${process.env.VERSION}`, `font-size: 25; color: green;`);
		window.wedding_invite = { version: process.env.VERSION };
	}

	render() {
	  return (
	    <div id="app">
				<Router onChange={this.handleRoute} >
					<Guests path="/guests" />
					<Home path="/" />
					<Home path="/:guests" />
					<Home path="/gosc/:id" />
					<Accommodation path="/nocleg" />
				</Router>
	      <Footer />
	    </div>
	  );
	}
}
