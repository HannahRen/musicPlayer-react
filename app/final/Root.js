import React, {Component} from 'react'
import { Router, IndexRoute, Link, Route, hashHistory } from 'react-router'
import App from './app'
import Player from './page/player'
import List from './page/list'

export default class Root extends Component {
	render() {
		return (
			<Router history={hashHistory}>
			    <Route path='/' component={App}>
				<IndexRoute component={Player}></IndexRoute>
				<Route path='/list' component={List}></Route>
			    </Route>
		        </Router>
		)
		
	}
}
