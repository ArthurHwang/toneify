import React from 'react'
import { Image } from 'semantic-ui-react'

const PedalboardBuilderDisplay = ({ pedals, currentPedalboard }) => (
  <Image size="massive" src={currentPedalboard.topView} centered />
)

export default PedalboardBuilderDisplay
