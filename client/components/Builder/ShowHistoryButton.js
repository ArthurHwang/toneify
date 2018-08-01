import React from 'react'
import { Button, Icon } from 'semantic-ui-react'

const ShowHistoryButton = ({ showModal }) => {
  const buttonOutput = (
    <Button
      onClick={showModal}
      color="black"
      className="show-history-button"
      style={{
        margin: '10px 0'
      }}
    >
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
        }}
      >
        ShowHistory
      </span>
    </Button>
  )

  return buttonOutput
}

export default ShowHistoryButton
