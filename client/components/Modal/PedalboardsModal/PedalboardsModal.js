import React from 'react'
import { Icon, Button, Header, Image, Modal } from 'semantic-ui-react'

const modal = ({ handleBuildClick, handleClick, pedalData, modalOpen }) => {
  let ModalOutput = modalOpen ? (
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
          style={{
            height: '100%',
            width: '500px',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
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
  ) : null

  return ModalOutput
}

export default modal