import React, { Component } from 'react';
import { Provider } from 'react-redux';

import Header from './Header';
import Cards from './Cards';
import '../App.css';


import store from './store';


class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<div>
					<div className="App-header">
						<header>
							<Header />
						</header>
					</div>
					<Cards />
				</div>
			</Provider>
		);
	}
}

export default App;
