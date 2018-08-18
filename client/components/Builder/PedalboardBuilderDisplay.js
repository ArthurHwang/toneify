import React, { Fragment } from 'react'
import { Image } from 'semantic-ui-react'
import BuilderTitle from './BuilderTitle'

const PedalboardBuilderDisplay = ({ currentPedalboard, showModal,showButton }) => (
  <Fragment>
    <BuilderTitle showButton={showButton} showModal={showModal} pedalboardName={currentPedalboard} />
    <Image size="massive" src={currentPedalboard.topView} centered />
  </Fragment>
)

export default PedalboardBuilderDisplay
