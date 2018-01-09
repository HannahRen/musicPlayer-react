import React, { Component } from 'react'
import PropTypes from 'prop-types'

import './listItem.less'

export default class ListItem extends Component {
  render() {
    let musicItem = this.props.musicItem
    return (
      <li className={`row components-listitem${this.props.focus ? ' focus' : ''}`}>
        <p><strong>{musicItem.title}</strong> - {musicItem.artist}</p>
        <p className="-col-auto delete"></p>
      </li>
    )
  }
}
ListItem.propTypes = {
  musicItem: PropTypes.object
}
