import React, { Fragment } from 'react'
import { Image } from 'semantic-ui-react'
import BuilderTitle from './BuilderTitle'

const PedalboardBuilderDisplay = ({ currentPedalboard }) => (
  <Fragment>
    <BuilderTitle pedalboardName={currentPedalboard} />
    <Image size="massive" src={currentPedalboard.topView} centered />
  </Fragment>
)

export default PedalboardBuilderDisplay
