import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const BuilderSaveButton = ({ showButton }) => {
  const buttonOutput = showButton.length > 0 && (
    <Button
      color="black"
      className="save-button"
      style={{
        margin: '10px 0'
      }}>
      <Icon
        style={{
          position: 'relative',
          bottom: '3px',
          left: '-4px'
        }}
        size="large"
        color="blue"
        name="save outline"
      />
      <span
        style={{
          color: '#2185d0'
        }}>
        Save Build
      </span>
    </Button>
  )

  return buttonOutput
}

export default BuilderSaveButton
