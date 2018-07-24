import React from 'react'
import { Icon, Button, Header, Image, Modal } from 'semantic-ui-react'

const modal = ({ handleClick, pedalData, modalOpen }) => (
  <Modal
    style={{ top: '40%' }}
    dimmer="blurring"
    open
    size="large"
    onClick={handleClick}
    closeIcon>
    <Modal.Header>
      {pedalData.brand}
      <Button compact floated="right" primary>
        Build
      </Button>
    </Modal.Header>
    <Modal.Content image>
      <Image wrapped size="massive" src={pedalData.image} />
      <Modal.Description>
        <Header>
          {pedalData.model}
          <div>
            <strong>
              <Icon name="money bill alternate" />
              {pedalData.price}
            </strong>
          </div>
        </Header>
        <p>{pedalData.description}</p>
      </Modal.Description>
    </Modal.Content>
  </Modal>
)

export default modal
