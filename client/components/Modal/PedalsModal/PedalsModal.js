import React from 'react'
import { Icon, Button, Header, Image, Modal } from 'semantic-ui-react'

const PedalsModal = ({
  handleBuildClick,
  handleClick,
  pedalData,
  modalOpen
}) => {
  const styles = {
    image: {
      height: '100%',
      width: '300px',
      backgroundSize: 'contain',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat'
    }
  }
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
          Add to Pedalboard
        </Button>
      </Modal.Header>
      <Modal.Content image>
        <Image
          style={styles.image}
          wrapped
          size="massive"
          src={pedalData.image}
        />
        <Modal.Description>
          <Header>
            <span style={{ color: '#bc003f' }}>{pedalData.model}</span>
            <div style={{ color: '#bc003f' }}>
              <strong>{pedalData.type}</strong>
            </div>
            <div>
              <strong>
                <Icon name="money bill alternate" />
                {pedalData.price}
              </strong>
            </div>
          </Header>
          <div>{pedalData.description}</div>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  ) : null

  return ModalOutput
}

export default PedalsModal
