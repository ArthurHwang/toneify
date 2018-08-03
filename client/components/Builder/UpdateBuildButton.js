import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const UpdateBuildButton = ({ pedalsOnScreen, isEditing, showButton }) => {
  const styles = {
    button: {
      margin: '10px 0',
      zIndex: '100',
      position: 'absolute',
      right: '0',
      top: '246px',
      height: '48px',
      width: '150px'
    },
    icon: {
      position: 'relative',
      bottom: '3px',
      left: '-15px'
    },
    text: {
      color: 'yellow'
    }
  }

  const buttonOutput = isEditing &&
    showButton &&
    pedalsOnScreen.length > 0 && (
    <Button color="black" style={styles.button}>
      <Icon style={styles.icon} size="large" color="yellow" name="edit" />
      <span style={styles.text}>Update</span>
    </Button>
  )

  return buttonOutput
}

export default UpdateBuildButton
