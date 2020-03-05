import React, { Component } from 'react';
import './App.css';
import Post from './Component/Post';
import AllPost from './Component/AllPost';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import postReducer from './Reducer/PostReducer';

class App extends Component {
	render() {
		const store = createStore(postReducer);

		return (
			<Provider store={store}>
				<div className="App">
					<Post />
					<AllPost />
				</div>
			</Provider>
		);
	}
}

export default App;
