import React from 'react'
import { Container } from 'semantic-ui-react'
import YoutubeFrame from 'react-youtube'

const YoutubePedalsOutput = ({ searchResults, pedalsOnBoard }) => {
  const opts = {
    width: '250',
    height: '180'
  }
  const styles = {
    container: {
      backgroundColor: '#1b1c1d',
      marginTop: '15px',
      padding: '20px 0'
    }
  }
  return (
    pedalsOnBoard.length > 0 &&
    searchResults.length > 0 && (
      <Container fluid style={styles.container} textAlign="center">
        {searchResults.map(video => (
          <YoutubeFrame key={video.id} opts={opts} videoId={video.id} />
        ))}
      </Container>
    )
  )
}

export default YoutubePedalsOutput
