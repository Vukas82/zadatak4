import React, { Component } from 'react';
import Header from './Header';
import Cards from './Cards';

import '../App.css';


class App extends Component {
	constructor(props) {
		super(props);

		this.store = {};
	}

	render() {
		return (

			<div>
				<div className="App-header">
					<header>
						<Header />
					</header>
				</div>
				<Cards />
			</div>

		);
	}
}

export default App;
