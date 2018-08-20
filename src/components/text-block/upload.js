import React, { Component } from "react"
import PropTypes from "prop-types"
import { Paper, Badge, Button } from "react-md"
import { cls } from "reactutils"

export default class Upload extends Component {
  initClass = "upload";

  render() {
    const { className, fileSize } = this.props
    return (
      <Paper zDepth={1} className={cls(this.initClass, className)}>
        <div className={cls(this.initClass + "-icon")}>
          <Badge badgeContent={fileSize} primary badgeId="notifications-1">
            <Button icon>notifications</Button>
          </Badge>
        </div>
        <div className={cls(this.initClass + "-type")}>1 File</div>
        <div className={cls(this.initClass + "-action")}>Upload file</div>
        <Button flat onClick={() => this.downloadFile()}>
          Upload
        </Button>
      </Paper>
    )
  }
}

Upload.propTypes = {
  className: PropTypes.string,
  fileSize: PropTypes.string,
  typeFile: PropTypes.string,
  filePath: PropTypes.string
}
