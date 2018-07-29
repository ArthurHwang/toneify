import React from 'react'
import { Button, Icon, Modal } from 'semantic-ui-react'
import Pedals from '../../Pedals/Pedals'

const builderModal = ({ handleClick, pedalData }) => (
  <Modal
    open
    dimmer="blurring"
    style={{ top: '13%', width: '1200px', left: '40%' }}
    trigger={(
      <Button
        color="black"
        style={{
          marginTop: '10px',
          marginRight: '0',
          float: 'right',
          height: '48px',
          width: '150px',
          display: 'inline'
        }}
      >
        <Icon size="large" color="green" name="add" />
        <span
          style={{
            color: '#21ba45'
          }}
        >
          Add Pedal
        </span>
      </Button>
    )}
  >
    <Modal.Header>Click a Pedal to Add to Pedalboard</Modal.Header>
    <Modal.Content image scrolling>
      <Pedals handleClick={handleClick} pedalData={pedalData} />
    </Modal.Content>
  </Modal>
)

export default builderModal
