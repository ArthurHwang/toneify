import React from 'react'
import { Icon, Table, Modal } from 'semantic-ui-react'

const HistoryModal = ({
  closeModalHandler,
  showModal,
  buildHistory,
  deleteBuild
}) => {
  const styles = {
    modal: {
      position: 'absolute',
      top: '13%'
    },
    iconDelete: {
      cursor: 'pointer'
    }
  }
  const modalOutput = showModal && (
    <Modal
      onClick={closeModalHandler}
      open
      dimmer="blurring"
      style={styles.modal}>
      <Modal.Header>Saved Builds</Modal.Header>
      <Modal.Content scrolling>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell textAlign="center">Time</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">PedalBoard</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">Pedals</Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Exchange Build
              </Table.HeaderCell>
              <Table.HeaderCell textAlign="center">
                Delete Build
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            {buildHistory.map(elem => (
              <Table.Row key={elem.id} textAlign="center" verticalAlign="top">
                <Table.Cell>{elem.timeStamp}</Table.Cell>
                <Table.Cell>{`${elem.pedalBoard.brand} ${
                  elem.pedalBoard.model
                }`}</Table.Cell>
                <Table.Cell textAlign="center" verticalAlign="top">
                  {elem.pedals.map(pedal => (
                    <strong key={pedal.id}>
                      {`${pedal.brand} ${pedal.model}`}
                      <br />
                    </strong>
                  ))}
                </Table.Cell>
                <Table.Cell textAlign="center" verticalAlign="top">
                  <Icon color="blue" name="exchange" />
                </Table.Cell>
                <Table.Cell textAlign="center" verticalAlign="top">
                  <Icon
                    style={styles.iconDelete}
                    onClick={() => deleteBuild(elem.id)}
                    color="red"
                    name="delete"
                  />
                </Table.Cell>
              </Table.Row>
            ))}
          </Table.Body>
        </Table>
      </Modal.Content>
    </Modal>
  )
  return modalOutput
}

export default HistoryModal
