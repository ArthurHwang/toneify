import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BuilderAddPedalButton = ({ showButton, showModal }) => {
  let buttonOutput = (
    <Button
      onClick={showModal}
      color="black"
      style={{
        marginTop: '13px',
        marginRight: '0',
        float: 'right',
        height: '48px',
        width: '150px',
        display: 'inline'
      }}>
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
