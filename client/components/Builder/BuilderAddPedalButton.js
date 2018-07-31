import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BuilderAddPedalButton = ({ showButton, showModal }) => {
  const buttonOutput = showButton && (
    <Button
      onClick={showModal}
      color="black"
      className="pedal-add-button"
      style={{
        margin: '10px 0'
      }}>
      <Icon
        style={{
          position: 'relative',
          bottom: '2px',
          left: '-8px'
        }}
        size="large"
        color="green"
        name="add"
      />
      <span
        style={{
          color: '#21ba45'
        }}>
        Add Pedal
      </span>
    </Button>
  )

  return buttonOutput
}
export default BuilderAddPedalButton
