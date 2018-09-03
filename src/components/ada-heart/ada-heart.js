import React, { Component } from 'react'
import PropTypes from "prop-types"
import {
  Checkbox,
  Switch,
  FontIcon
} from 'react-md'
import './ada-heart.scss'
import AdaIcon from '../adaIcon'

export default class AdaHeart extends Component {

  render() {
    const { star, heart, switcher, eye } = this.props
    return (
      <div className="adaHeart">
        {heart &&
          <Checkbox
            {...this.props}
            aria-label=""
            name="using-adaHeart-icons"
            checkedCheckboxIcon={<AdaIcon fill="red" width="20" height="20" viewBox="0 0 24 24" icon="favoriteUnChecked" />}
            uncheckedCheckboxIcon={<AdaIcon fill="red"  width="20" height="20" viewBox="0 0 24 24" icon="favoriteChecked" />}
          />
        }
        {star &&
          <Checkbox
            {...this.props}
            aria-label=""
            name="using-adaHeart-icons"
            checkedCheckboxIcon={<AdaIcon fill="yellow" width="20" height="20" viewBox="0 0 24 24" icon="startBorder" />}
            uncheckedCheckboxIcon={<AdaIcon fill="yellow" width="20" height="20" viewBox="0 0 24 24" icon="start" />}
          />
        }
        {switcher &&
          <Switch
            {...this.props}
            id="switch-power"
            type="switch"
          />
        }
        {eye &&
          <Checkbox
            {...this.props}
            aria-label=""
            name="using-adaHeart-icons"
            className={`adaHeart-icons-Eye`}
            checkedCheckboxIcon={<FontIcon iconClassName={`mdi mdi-eye`} />}
            uncheckedCheckboxIcon={<FontIcon iconClassName={`mdi mdi-eye-outline`} />}
          />
        }
        {!star && !heart && !switcher && !eye &&
          <Checkbox
            {...this.props}
            aria-label=""
            name="using-adaHeart-icons"
            type="checkbox"
          />}
      </div>
    )
  }
}
AdaHeart.propTypes = {
  star: PropTypes.bool,
  heart: PropTypes.bool,
  switcher: PropTypes.bool,
  eye: PropTypes.bool
}