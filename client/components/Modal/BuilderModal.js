import React from 'react'
import { Modal } from 'semantic-ui-react'
import Pedals from '../Pedals/Pedals'

const BuilderModal = ({
  closeModalHandler,
  showModal,
  handleClick,
  pedalData
}) => {
  const styles = {
    modal: {
      position: 'absolute',
      top: '13%'
    }
  }
  const modalOutput = (
    <Modal
      onClick={closeModalHandler}
      open
      dimmer="blurring"
      style={styles.modal}>
      <Modal.Header>Click a Pedal to Add to Pedalboard</Modal.Header>
      <Modal.Content image scrolling>
        <Pedals handleClick={handleClick} pedalData={pedalData} />
      </Modal.Content>
    </Modal>
  )

  return showModal && modalOutput
}

export default BuilderModal
