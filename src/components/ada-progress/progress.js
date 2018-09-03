import React, { Component } from 'react'
import PropTypes from "prop-types"
import { LinearProgress } from "react-md"

export default class Progress extends Component {
  render() {
    const { item } = this.props
    return (
      <div className="item-progress">
        <LinearProgress
          id={`item-LinearProgress-${item.id}`}
          value={item.value}
        />
        <div className="item-percent-min">%{item.min}</div>
        <div className="item-percent-max">%{item.max}</div>
      </div>
    )
  }
}
Progress.propTypes = {
  item: PropTypes.object,
}