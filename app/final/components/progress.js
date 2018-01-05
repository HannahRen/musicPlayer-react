import React, { Component } from 'react'
import './progress.less'

export default class Progress extends Component {
  changeProgress(e) {
    let progressBar = this.refs.progressBar
    let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth
  }
  render() {
    return (
      <div className='components-progress' ref='progressBar' onClick={this.changeProgress}>
        <div className='progress'
             style={{width: `${this.props.progress}%`}}
        >

        </div>
      </div>
    )
  }
}
