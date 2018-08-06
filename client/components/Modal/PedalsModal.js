import React from 'react'
import { Icon, Button, Header, Image, Modal, Divider, Table } from 'semantic-ui-react'

const PedalsModal = ({ handleBuildClick, handleClick, pedalData, modalOpen }) => {
  let ModalOutput = modalOpen && (
    <Modal style={{ top: '10%' }} open size="large" onClick={handleClick} closeIcon>
      <Modal.Header>
        {pedalData.brand}
        <Button onClick={handleBuildClick} compact floated="right" primary>
          Add to Pedalboard
        </Button>
      </Modal.Header>
      <Modal.Content scrolling image>
        <Image
          className="pedal-modal-image"
          wrapped
          size="massive"
          src={pedalData.image}
          style={{
            width: '300px'
          }}
        />
        <Modal.Description>
          <Header>
            <span style={{ color: '#bc003f' }}>{pedalData.model}</span>
            <div style={{ color: '#bc003f' }}>
              <strong>{pedalData.type}</strong>
            </div>
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
        <Table compact striped>
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell colSpan="2">Technical Specifications</Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row verticalAlign="middle">
              <Table.Cell width={3}>
                <strong>Type</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.type}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Inputs</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.inputs}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Outputs</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.outputs}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Batteries</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.batteries}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Height</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.height}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Width</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.width}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Depth</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.depth}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell textAlign="left">
                <strong>Weight</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.weight}</Table.Cell>
            </Table.Row>
            <Table.Row verticalAlign="middle">
              <Table.Cell>
                <strong>Power Supply</strong>
              </Table.Cell>
              <Table.Cell>{pedalData.specs.pwrSupply}</Table.Cell>
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
  return ModalOutput
}

export default PedalsModal
