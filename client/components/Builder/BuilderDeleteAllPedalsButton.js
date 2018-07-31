import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const DeleteAllPedalsButton = ({ showButton, deleteAllPedals }) => {
  const buttonOutput = showButton.length && (
    <Button
      onClick={deleteAllPedals}
      color="black"
      className="pedal-delete-button">
      <Icon
        style={{
          position: 'relative',
          bottom: '3px'
        }}
        size="large"
        color="red"
        name="delete"
      />
      <span
        style={{
          color: '#bc003f'
        }}>
        Clear Pedals
      </span>
    </Button>
  )

  return buttonOutput
}
export default DeleteAllPedalsButton
