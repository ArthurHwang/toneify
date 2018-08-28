import React from 'react'
import { Advertisement } from 'semantic-ui-react'

const BuilderHint = ({ showHint, currentPedalboard, pedalsOnBoard }) => {
  const styles = {
    advertisement: {
      left: '0',
      right: '0',
      margin: 'auto',
      height: '50px',
      width: '400px',
      top: '8.5%',
      borderRadius: '5px',
      position: 'absolute',
      backgroundColor: '#bc003f',
      zIndex: '1'
    }
  }

  return (
    pedalsOnBoard.length < 1 && (
      <Advertisement style={styles.advertisement} unit="banner" centered test="Tip: Double-click a pedal to hear it!" />
    )
  )
}

export default BuilderHint
