import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BuilderAddPedalButton = ({ showButton, showModal }) => {
  const buttonOutput = (
    <Button onClick={showModal} color="black" className="pedal-add-button">
      <Icon size="large" color="green" name="add" />
      <span
        style={{
          color: '#21ba45'
        }}>
        Add Pedal
      </span>
    </Button>
  )

  return showButton && buttonOutput
}
export default BuilderAddPedalButton
