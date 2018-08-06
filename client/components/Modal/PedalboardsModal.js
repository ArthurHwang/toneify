import React, { Fragment } from 'react'
import { Icon, Button, Header, Image, Modal, Table, Divider } from 'semantic-ui-react'

const PedalboardsModal = ({ handleBuildClick, handleClick, pedalData, modalOpen }) => {
  const modalOutput = modalOpen && (
    <Modal style={{ top: '22%' }} open size="large" onClick={handleClick} closeIcon>
      <Modal.Header>
        {pedalData.brand}
        <Button onClick={handleBuildClick} compact floated="right" primary>
          Build
        </Button>
      </Modal.Header>
      <Modal.Content image>
        <Image className="pedalboard-modal-image" wrapped size="massive" src={pedalData.image} />
        <Modal.Description>
          <Header>
            <span style={{ color: '#bc003f' }}>{pedalData.model}</span>
            <div>
              <strong>
                <Icon color="green" name="money bill alternate" />
                {pedalData.price}
              </strong>
            </div>
          </Header>
          <p style={{ fontSize: '1.2rem' }}>{pedalData.description}</p>
        </Modal.Description>
      </Modal.Content>
      <Divider />
      <Modal.Content style={{ paddingTop: '0' }}>
        <Table striped>
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
              <Table.Cell>{pedalData.specs.length}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Depth</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.depth}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Height</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.height}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Weight</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.weight}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Powered</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.powered}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Material</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.material}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>SKU</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.sku}</Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Modal.Content>
    </Modal>
  )

  return modalOutput
}

export default PedalboardsModal
