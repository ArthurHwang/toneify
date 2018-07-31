import React from 'react'
import { Icon, Button, Header, Image, Modal } from 'semantic-ui-react'

const PedalboardsModal = ({
  handleBuildClick,
  handleClick,
  pedalData,
  modalOpen
}) => {
  const modalOutput = modalOpen && (
    <Modal
      style={{ top: '38%' }}
      dimmer="blurring"
      open
      size="large"
      onClick={handleClick}
      closeIcon>
      <Modal.Header>
        {pedalData.brand}
        <Button onClick={handleBuildClick} compact floated="right" primary>
          Build
        </Button>
      </Modal.Header>
      <Modal.Content image>
        <Image
          className="pedalboard-modal-image"
          wrapped
          size="massive"
          src={pedalData.image}
        />
        <Modal.Description>
          <Header>
            <span style={{ color: '#bc003f' }}>{pedalData.model}</span>
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

  return modalOutput
}

export default PedalboardsModal
