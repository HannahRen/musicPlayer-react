import React, { Component } from 'react'
import { MUSIC_LIST } from './config/config'
import Logo from './components/logo'
import Player from './page/player'
import List from './page/list'

export default class App extends Component {
  constructor(props) {
		super(props)
		this.state = {
			musicList: MUSIC_LIST,
			currentMusicItem: MUSIC_LIST[0]
		}
	}
	componentDidMount() {
		$('#player').jPlayer({
			ready: () => {
				$(this).jPlayer('setMedia', {
					mp3: this.state.currentMusicItem.file
				}).jPlayer('play')
			},
			supplied: 'mp3',
			wmode: 'window'
		})
	}
	render() {
		return (
			<div>
				<Logo />
				<List musicList={this.state.musicList} currentMusicItem={this.state.currentMusicItem}/>
			</div>
		)
  }
}
