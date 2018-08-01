import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BuilderAddPedalButton = ({ showButton, showModal }) => {
  const styles = {
    button: {
      margin: '10px 0'
    },
    icon: {
      position: 'relative',
      bottom: '2px',
      left: '-8px'
    },
    text: {
      color: '#21ba45'
    }
  }
  const buttonOutput = showButton && (
    <Button
      onClick={showModal}
      color="black"
      className="pedal-add-button"
      style={styles.button}>
      <Icon style={styles.icon} size="large" color="green" name="add" />
      <span style={styles.text}>Add Pedal</span>
    </Button>
  )

  return buttonOutput
}
export default BuilderAddPedalButton
