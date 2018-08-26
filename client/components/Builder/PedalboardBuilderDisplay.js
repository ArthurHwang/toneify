import React, { Fragment } from 'react'
import { Image } from 'semantic-ui-react'
import BuilderTitle from './BuilderTitle'

const PedalboardBuilderDisplay = ({ pedalsOnBoard, currentPedalboard, totalPrice }) => (
  <Fragment>
    <BuilderTitle pedalsOnBoard={pedalsOnBoard} totalPrice={totalPrice} currentPedalboard={currentPedalboard} />
    <Image size="massive" src={currentPedalboard.topView} centered />
  </Fragment>
)

export default PedalboardBuilderDisplay
