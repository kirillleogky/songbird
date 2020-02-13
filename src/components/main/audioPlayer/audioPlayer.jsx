import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/src/styles.scss'

const Player = audioLink => {
  return <AudioPlayer src={audioLink.audio} />
}

export default Player
