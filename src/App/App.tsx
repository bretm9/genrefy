import React, { Component } from 'react';
import './App.scss';
import { Link, Route, NavLink} from 'react-router-dom';

class App extends Component<{}> {
	constructor(props: any) {
		super(props)
		this.state = {
			genres: [],
			playlists: []
		}
	}
	
	render () {
		return (
			<div className='App'>
				<h1>Genrefy</h1>
			</div>
		)
	}
}

export default App;
