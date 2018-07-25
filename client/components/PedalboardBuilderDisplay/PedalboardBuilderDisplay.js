import React from 'react'
import { Image } from 'semantic-ui-react'

const PedalboardBuilderDisplay = ({ currentPedalboard }) => (
  <Image
    // style={{ width: '80%', height: '50%' }}
    size="massive"
    src={currentPedalboard.topView}
    centered
  />
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
