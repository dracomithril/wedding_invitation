import { Component } from 'preact';
import { Router } from 'preact-router';
import Home from '../routes/home';
import Guests from '../routes/guests';
import { Footer } from './Footer';

console.log(`%ccurrent app version: ${process.env.VERSION}`, `font-size: 25; color: green;`);
window.version = process.env.VERSION || 'nope';

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
	        <Home path="/gosc/:id" />
	      </Router>
	      <Footer />
	    </div>
	  );
	}
}
