import React from 'react'
import { Icon, Table, Modal } from 'semantic-ui-react'

const HistoryModal = ({ closeModalHandler, showModal, buildHistory }) => {
  const modalOutput = showModal && (
    <Modal onClick={closeModalHandler} open dimmer="blurring" style={{ position: 'absolute', top: '13%' }}>
      <Modal.Header>Saved Builds</Modal.Header>
      <Modal.Content>
        <Table striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>Time</Table.HeaderCell>
              <Table.HeaderCell>PedalBoard</Table.HeaderCell>
              <Table.HeaderCell>Pedals</Table.HeaderCell>
              <Table.HeaderCell>Exchange Build</Table.HeaderCell>
            </Table.Row>
          </Table.Header>

          <Table.Body>
            {buildHistory.map(elem => (
              <Table.Row key={elem.id} verticalAlign="top">
                <Table.Cell>{elem.timeStamp}</Table.Cell>
                <Table.Cell>{`${elem.pedalBoard.brand} ${elem.pedalBoard.model}`}</Table.Cell>
                <Table.Cell verticalAlign="top">
                  {elem.pedals.map(pedal => (
                    <strong key={pedal.id}>
                      {`${pedal.brand} ${pedal.model}`}
                      <br />
                    </strong>
                  ))}
                </Table.Cell>
                <Table.Cell verticalAlign="top">
                  <Icon name="exchange" />
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
