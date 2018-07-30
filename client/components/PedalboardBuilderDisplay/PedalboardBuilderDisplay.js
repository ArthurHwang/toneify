import React, { Component } from 'react'
import { Image } from 'semantic-ui-react'

const PedalboardBuilderDisplay = ({ currentPedalboard }) => {
  return (
    <div>
      <Image size="massive" src={currentPedalboard.topView} centered />
    </div>
  )
}

export default PedalboardBuilderDisplay
