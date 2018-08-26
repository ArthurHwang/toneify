import React from 'react'
import { Message, Segment, Button, Icon, Image, Grid } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

const BuilderTitle = ({ pedalsOnBoard, currentPedalboard, totalPrice }) => {
  const styles = {
    message: {
      display: 'block',
      marginBottom: '14px',
      padding: '0'
    },
    segment: {
      height: '80px'
    },
    segmentMiddle: {
      height: '80px',
      padding: '0'
    },
    pedalDiv: {
      display: 'inline-block',
      padding: '4px',
      margin: '0'
    },
    image: {
      margin: '0 auto',
      height: '50px',
      width: '33.75px'
    }
  }

  return (
    <Message attached="top" style={styles.message}>
      <Grid stackable columns="equal">
        <Grid.Column>
          <Segment textAlign="center" style={styles.segment}>
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
          <Segment textAlign="center" style={styles.segmentMiddle}>
            {pedalsOnBoard.map(pedal => (
              <div key={pedal.id} style={styles.pedalDiv}>
                <span style={{ display: 'inline-block' }} key={pedal.id}>
                  <Image inline style={styles.image} size="mini" src={pedal.image} />
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
          <Segment textAlign="center" style={styles.segment}>
            <p style={{ marginBottom: '0' }}>
              <strong>
                Total Price:
                <Icon color="green" name="money bill alternate" />
                {totalPrice.toFixed(2)}
              </strong>
            </p>
            <Button primary compact>
              <Link style={{ color: 'white' }} to="/cart">
                Purchase Configuration
              </Link>
            </Button>
          </Segment>
        </Grid.Column>
      </Grid>
    </Message>
  )
}

export default BuilderTitle
