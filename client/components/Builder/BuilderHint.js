import React from 'react'
import { Advertisement } from 'semantic-ui-react'

const BuilderHint = ({ showHint, currentPedalboard }) => {
  const styles = {
    advertisement: {
      left: '0',
      right: '0',
      margin: 'auto',
      height: '30px',
      width: '300px',
      position: 'absolute',
      color: '#bc003f'
    }
  }
  return (
    currentPedalboard &&
    showHint && (
      <Advertisement
        style={styles.advertisement}
        unit="banner"
        centered
        test="Hint: Double-click a pedal to hear it!"
      />
    )
  )
}

export default BuilderHint
