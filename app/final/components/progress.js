import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './progress.less'

export default class Progress extends Component {
  constructor(props) {
    super(props)
    this.state = {
      barColor: '#2f9842'
    }
  }
  changeProgress(e) {
    let progressBar = this.refs.progressBar
    let progress = (e.clientX - progressBar.getBoundingClientRect().left) / progressBar.clientWidth
    this.props.onProgressChange && this.props.onProgressChange(progress)
  }
  render() {
    return (
      <div className='components-progress' ref='progressBar' onClick={this.changeProgress}>
        <div className='progress'
             style={{width: `${this.props.progress}%`, background: this.props.barColor}}>
        </div>
      </div>
    )
  }
}
Progress.propTypes = {
  onProgressChange: PropTypes.func,
  barColor: PropTypes.string,
  progress: PropTypes.number
}
