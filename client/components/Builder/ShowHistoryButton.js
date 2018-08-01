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
      }}>
      <Icon
        style={{
          position: 'relative',
          bottom: '3px',
          left: '-15px'
        }}
        size="large"
        color="orange"
        name="history"
      />
      <span
        style={{
          color: '#f2711c'
        }}>
        History
      </span>
    </Button>
  )

  return buttonOutput
}

export default ShowHistoryButton
