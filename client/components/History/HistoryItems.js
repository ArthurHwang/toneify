import React from 'react'
import { Container, Icon, Table, Message } from 'semantic-ui-react'

const HistoryItems = ({ data }) => (
  <Container>
    <Message>Purchase History</Message>

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
              <strong>
                <Icon color="green" name="money bill alternate" />
                ${build.amount / 100}
              </strong>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table>
  </Container>
)

export default HistoryItems
