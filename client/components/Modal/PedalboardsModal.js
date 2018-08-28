import React from 'react'
import { Icon, Button, Header, Image, Modal, Table, Divider } from 'semantic-ui-react'

const PedalboardsModal = ({ handleBuildClick, handleClick, pedalboardData, modalOpen }) => {
  const modalOutput = modalOpen && (
    <Modal style={{ top: '15%' }} open size="large" onClick={handleClick}>
      <Modal.Header>
        {pedalboardData.brand}
        <Button onClick={handleBuildClick} compact floated="right" primary>
          Build
        </Button>
      </Modal.Header>
      <Modal.Content image>
        <Image className="pedalboard-modal-image" wrapped size="massive" src={pedalboardData.image} />
        <Modal.Description>
          <Header>
            <span style={{ color: '#bc003f' }}>{pedalboardData.model}</span>
            <div>
              <strong>
                <Icon color="green" name="money bill alternate" />
                {pedalboardData.price}
              </strong>
            </div>
          </Header>
          <p style={{ fontSize: '1.2rem' }}>{pedalboardData.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Divider />
      <Modal.Content style={{ paddingTop: '0' }}>
        <Table compact striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Technical Specifications</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Length</strong>
              </Table.Cell>
              <Table.Cell>{pedalboardData.specs.length}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Depth</strong>
              </Table.Cell>
              <Table.Cell>{pedalboardData.specs.depth}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Height</strong>
              </Table.Cell>
              <Table.Cell>{pedalboardData.specs.height}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Weight</strong>
              </Table.Cell>
              <Table.Cell>{pedalboardData.specs.weight}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Powered</strong>
              </Table.Cell>
              <Table.Cell>{pedalboardData.specs.powered}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Material</strong>
              </Table.Cell>
              <Table.Cell>{pedalboardData.specs.material}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>SKU</strong>
              </Table.Cell>
              <Table.Cell>{pedalboardData.specs.sku}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal.Content>
    </Modal>
  )

  return modalOutput
}

export default PedalboardsModal
