import React from 'react'
import { Container } from 'semantic-ui-react'
import YoutubeFrame from 'react-youtube'

const YoutubePedalsOutput = ({ searchResults }) => {
  const opts = {
    width: "300",
    height: "180"
  }
  return (
    <Container textAlign='center'>
      {searchResults.map(video => (
        <YoutubeFrame key={video.id} opts={opts} videoId={video.id} />
      ))}
    </Container>
  )
}




export default YoutubePedalsOutput
