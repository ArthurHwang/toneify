import React from 'react'
import { Message, Segment, Button, Icon, Image, Grid } from 'semantic-ui-react'

const BuilderTitle = ({ pedalsOnBoard, currentPedalboard, totalPrice }) => (
  <Message attached="top" style={{ display: 'block', marginBottom: '14px', padding: '0' }}>
    <Grid stackable columns="equal">
      <Grid.Column>
        <Segment textAlign="center" style={{ height: '80px' }}>
          <p style={{ marginBottom: '5px' }}>
            <span style={{ fontSize: '1.2rem', color: '#bc003f' }}>Pedalboard: </span>
            <strong>
              {currentPedalboard.brand} {currentPedalboard.model}
            </strong>
          </p>

          <p style={{ margin: '0', display: 'block' }}>
            <strong>
              <Icon color="green" name="money bill alternate" />
              {currentPedalboard.price}
            </strong>
          </p>
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment textAlign="center" style={{ height: '80px', padding: '0' }}>
          {pedalsOnBoard.map(pedal => (
            <div key={pedal.id} style={{ display: 'inline-block', padding: '4px', margin: '0' }}>
              <span style={{ display: 'inline-block' }} key={pedal.id}>
                <Image
                  inline
                  style={{ margin: '0 auto', height: '50px', width: '33.75px' }}
                  size="mini"
                  src={pedal.image}
                />
                <p style={{ margin: '0', display: 'block' }}>
                  <strong>
                    <Icon color="green" name="money bill alternate" />
                    {pedal.price}
                  </strong>
                </p>
              </span>
            </div>
          ))}
        </Segment>
      </Grid.Column>

      <Grid.Column>
        <Segment textAlign="center" style={{ height: '80px' }}>
          <p style={{ marginBottom: '0' }}>
            <strong>
              Total Price:
              <Icon color="green" name="money bill alternate" />
              {totalPrice}
            </strong>
          </p>
          <Button href="/checkout" primary compact>
            Purchase Build
          </Button>
        </Segment>
      </Grid.Column>
    </Grid>
  </Message>
)

export default BuilderTitle
