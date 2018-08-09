import React from 'react'
import { Container } from 'semantic-ui-react'
import YoutubeFrame from 'react-youtube'

const YoutubePedalsOutput = ({ searchResults }) => {
  const opts = {
    width: '300',
    height: '200'
  }
  const styles = {
    container: {
      backgroundColor: '#1b1c1d',
      marginTop: '15px',
      padding: '20px 0'
    }
  }
  return (
    searchResults.length > 0 && (
      <Container fluid style={styles.container} textAlign="center">
          {searchResults.map(video => <YoutubeFrame  key={video.id} opts={opts} videoId={video.id} />)}
      </Container>
    )
  )
}

export default YoutubePedalsOutput
