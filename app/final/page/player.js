import React, { Component } from 'react'
import './player.less'

import Progress from '../components/progress'

let duration = null

export default class Player extends Component {
	constructor(props) {
		super(props)
		this.state = {
			progress: 0
		}
	}

	handleProgressChange(progress) {
		$('#player').jPlayer('play', duration * progress)
	}

	componentDidMount() {
		$('#player').bind($.jPlayer.event.timeupdate, (e) => {
			duration = e.jPlayer.status.duration
			this.setState = ({
				progress: e.jPlayer.status.currentPercentAbsolute
			})
		})
	}
	componentWillUnMount() {
		$('#player').unbind($.jPlayer.event.timeupdate)
	}
	render() {
		return(
			
		)
	}
}
