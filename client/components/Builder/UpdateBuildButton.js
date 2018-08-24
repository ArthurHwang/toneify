import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const UpdateBuildButton = ({ updateBuild, pedalsOnScreen, isEditing, showButton }) => {
  const styles = {
    button: {
      height: '48px',
      width: '150px'
    },
    icon: {
      position: 'relative',
      bottom: '3px',
      left: '-15px',
      color: 'rgb(255, 0, 255)'
    },
    text: {
      color: 'rgb(255, 0, 255)'
    }
  }

  const buttonOutput = isEditing &&
    showButton &&
    pedalsOnScreen.length > 0 && (
    <Button color="black" onClick={updateBuild} style={styles.button}>
      <Icon style={styles.icon} size="large" name="edit" />
      <span style={styles.text}>Update</span>
    </Button>
  )
  return buttonOutput
}

export default UpdateBuildButton
