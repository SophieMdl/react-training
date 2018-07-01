import React from 'react'
import ReactAudioPlayer from 'react-audio-player'

const AudioPlayer = ( { musicPlaying, playNextMusic } ) => {
  return (
    <div>
      <h3>{musicPlaying.title}</h3>
        <ReactAudioPlayer
          onEnded={() => playNextMusic(musicPlaying)}
          src={musicPlaying.url}
          controls
          autoPlay
        />
    </div>
  )
}

export default AudioPlayer
