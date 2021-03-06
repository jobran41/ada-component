import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper } from "react-md"
import { cls } from "reactutils"
import MyCalendar from "rc-calendar"

import "rc-calendar/assets/index.css"
import "./calendar.scss"

export default class Calendar extends Component {
  render() {
    const { className, dateCellRender } = this.props
    return (
      <Paper zDepth={1} className={cls("calendar", className)}>
        <div className="calendar-content">
          <MyCalendar
            {...this.props}
            showDateInput={false}
            showToday={false}
            dateCellRender={dateCellRender}
          />
        </div>
      </Paper>
    )
  }
}

Calendar.propTypes = {
  className: PropTypes.string,
  dateCellRender: PropTypes.func
}
