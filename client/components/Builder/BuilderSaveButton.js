import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BuilderSaveButton = ({ showButton, saveBuild }) => {
  const styles = {
    button: {
      margin: '10px 0'
    },
    icon: {
      position: 'relative',
      bottom: '3px',
      left: '-4px'
    },
    text: {
      color: '#2185d0'
    }
  }
  const buttonOutput = showButton.length > 0 && (
    <Button
      onClick={saveBuild}
      color="black"
      className="save-button"
      style={styles.button}>
      <Icon style={styles.icon} size="large" color="blue" name="save outline" />
      <span style={styles.text}>Save Build</span>
    </Button>
  )

  return buttonOutput
}

export default BuilderSaveButton
