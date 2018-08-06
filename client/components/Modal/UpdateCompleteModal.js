import React from 'react'
import { Button, Modal } from 'semantic-ui-react'

const UpdateCompleteModal = ({ showModal, closeModal }) => {
  const styles = {
    modal: {
      position: 'absolute',
      top: '43%'
    }
  }
  const modalOutput = showModal && (
    <Modal style={styles.modal} size="mini" open onClick={closeModal}>
      <Modal.Header>Attention</Modal.Header>
      <Modal.Content>
        <p>Your build has successfully been updated!</p>
      </Modal.Content>
      <Modal.Actions>
        <Button positive icon="checkmark" labelPosition="right" content="OK" />
      </Modal.Actions>
    </Modal>
  )
  return modalOutput
}

export default UpdateCompleteModal
