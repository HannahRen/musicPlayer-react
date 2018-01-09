import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { MUSIC_LIST } from '../config/config'
import ListItem from '../components/listItem'

export default class List extends Component {
  render() {
    let listEle = this.props.musicList.map((item) => {
      return (
        <ListItem
          focus = {item === this.props.currentMusicItem}
          key={item.id}
          musicItem={item}
        >
          {item.title}
        </ListItem>
      )
    })
    return (
      <ul>
        {listEle}
      </ul>
    )
  }
}
List.propTypes = {
  musicList: PropTypes.array,
  currentMusicItem: PropTypes.object
}
