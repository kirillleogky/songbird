import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/src/styles.scss'

const Player = () => {
  return (
    <AudioPlayer
      autoPlay
      src="https://data.ipleer.com/file/88390272/MFJLRUhBQklhSk5wemxVVWlhL0k0NmpWWmdYaDRyVDZxaSt0Y0g1UFJKWVpkMHN3ZktrZVNPU3REK2x6YjdhYUdQNGNyY01FdTFBNEo0b3NobEJNTXNhRVB0TGg1U3c0MkNiVXRHYVNvdC9hZ3M3MGRsZGFzNHg1N1hPNU9VNDI/Joel_Nielsen_-_Apprehension_(iPleer.com).mp3"
      onPlay={() => window.console.log('onPlay')}
    />
  )
}

export default Player
