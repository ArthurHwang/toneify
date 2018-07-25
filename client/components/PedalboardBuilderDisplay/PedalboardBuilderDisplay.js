import React from 'react'
import { Image } from 'semantic-ui-react'

const PedalboardBuilderDisplay = ({ currentPedalboard }) => (
  <Image src={currentPedalboard.topView} fluid />
)

// import React from 'react'
// import { Image } from 'semantic-ui-react'
//
// const ImageExampleFluid = () => (
//   <Image src="/images/wireframe/image.png" fluid />
// )
//
// export default ImageExampleFluid
export default PedalboardBuilderDisplay
