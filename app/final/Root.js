import React, { Component } from 'react';
import Logo from './components/logo'
import Progress from './components/progress'

export default class Root extends Component {
	render() {
		return (
			<div>
				<Logo />
				<Progress
					progress={1}
				>

				</Progress>
			</div>
		)
	}
}
