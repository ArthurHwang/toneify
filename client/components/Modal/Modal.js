import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

const modal = ({ handleClick, pedalData }) => (
  <Modal onClick={handleClick} open closeIcon>
    <Modal.Header>{pedalData.brand}</Modal.Header>
    <Modal.Content image>
      <Image wrapped size="massive" src={pedalData.image} />
      <Modal.Description>
        <Header>
          {pedalData.model}
          <div>
            <strong>${pedalData.price}</strong>
          </div>
        </Header>
        <p>{pedalData.description}</p>
      </Modal.Description>
      {/* <div> */}

      {/* </div> */}
    </Modal.Content>
    <Button float={right} primary>
      Build
    </Button>
  </Modal>
)

export default modal
