import React from 'react'
import { Modal } from 'semantic-ui-react'
import Pedals from '../../Pedals/Pedals'

const builderModal = ({
  closeModalHandler,
  showModal,
  handleClick,
  pedalData
}) => {
  const modalOutput = (
    <Modal
      onClick={closeModalHandler}
      open
      dimmer="blurring"
      style={{ position: 'absolute', top: '13%' }}>
      <Modal.Header>Click a Pedal to Add to Pedalboard</Modal.Header>
      <Modal.Content image scrolling>
        <Pedals handleClick={handleClick} pedalData={pedalData} />
      </Modal.Content>
    </Modal>
  )

  return showModal && modalOutput
}

export default builderModal
