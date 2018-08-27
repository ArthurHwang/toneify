import React, { Fragment } from 'react'
import { Item, Divider, Container, Icon, Table, Message } from 'semantic-ui-react'

const HistoryItems = ({ data }) => (
  <Container>
    <Message textAlign="center">Purchase History</Message>

    <Table striped>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell textAlign="center">Date Purchased</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">PedalBoard</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Pedals</Table.HeaderCell>
          <Table.HeaderCell textAlign="center">Total Purchase Amount</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {data.map(build => (
          <Table.Row key={build.id} textAlign="center" verticalAlign="middle">
            <Table.Cell>{build.timeStamp}</Table.Cell>
            <Table.Cell>{`${build.pedalboard.brand} ${build.pedalboard.model}`}</Table.Cell>
            <Table.Cell textAlign="center" verticalAlign="middle">
              {build.pedals.map(pedal => (
                <strong key={pedal.id}>
                  {`${pedal.brand} ${pedal.model}`}
                  <br />
                </strong>
              ))}
            </Table.Cell>
            <Table.Cell textAlign="center" verticalAlign="middle">
              ${build.amount / 100}
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Container>
)

export default HistoryItems
