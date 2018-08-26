import React from 'react'
import { Advertisement } from 'semantic-ui-react'

const BuilderHint = ({ showHint, currentPedalboard }) => {
  const styles = {
    advertisement: {
      left: '0',
      right: '0',
      margin: 'auto',
      height: '50px',
      width: '400px',
      top: '45%',
      borderRadius: '5px',
      position: 'absolute',
      backgroundColor: '#bc003f',
      zIndex: '1'
    }
  }
  return (
    currentPedalboard &&
    showHint && (
      <Advertisement style={styles.advertisement} unit="banner" centered test="Tip: Double-click a pedal to hear it!" />
    )
  )
}

export default BuilderHint
