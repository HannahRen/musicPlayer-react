import React, { Component } from 'react';
import { MUSIC_LIST } from './config/config'

import Logo from './components/logo'
import Player from './page/player'

export default class Root extends Component {
	constructor(props) {
		super(props)
		this.state = {
			musicList: MUSIC_LIST
		}
	}
	componentDidMount() {
		$('#player').jPlayer({
			ready: () => {
				$(this).jPlayer('setMedia', {
					mp3: ''
				})
			}
		})
	}
	render() {
		return (
			<div>
				<Logo />
				<Player />
			</div>
		)
	}
}
