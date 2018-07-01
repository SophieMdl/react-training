import React, { Component } from 'react'
import ListMusics from '../components/ListMusics'
import Playlist from '../components/Playlist'
import musics from '../musics.json'
import AudioPlayer from '../components/AudioPlayer.js';

class Music extends Component {

  state = {
    musics: musics,
    playlist: [],
    musicToPlay: undefined
  }
  addToPlaylist = id => {
    if (this.state.playlist.some(music => music.id === id)) {
      return
    }
    const newMusic = this.state.musics.find(music => music.id === id)
    this.setState({ playlist: [...this.state.playlist, newMusic] })
  }
  removeFromPlaylist = id => {
    const updatedPlaylist = this.state.playlist.filter(music => music.id !== id)
    this.setState({ playlist: updatedPlaylist })
  }
  playMusic = (music) => {
    const updatedPlaylist = this.state.playlist.filter(m => m.id !== music.id)
    this.setState({ playlist: [music, ...updatedPlaylist] })
    this.setState({ musicToPlay: music })
  }
  playNextMusic = (prevMusic) => {
    const indexOfPrevMusic = this.state.playlist.indexOf(prevMusic)
    const nextMusic = this.state.playlist[indexOfPrevMusic+1]
    if(nextMusic){
      this.setState({ musicToPlay: nextMusic })
    }
  }
  render() {
    const state = this.state
    return (
      <div>
        <h3>Musique</h3>
        {state.musics.map(music =>
          <ListMusics key={music.id} music={music} addToPlaylist={this.addToPlaylist} playMusic={this.playMusic} />
        )}
        <h3>Playlist</h3>
        {state.playlist.map(music =>
          <Playlist key={music.id} music={music} removeFromPlaylist={this.removeFromPlaylist} playMusic={this.playMusic} />
        )}
        <h3>Player</h3>
        {state.musicToPlay === undefined ? "" : <AudioPlayer musicPlaying={state.musicToPlay} playNextMusic={this.playNextMusic} />}
      </div>
    )
  }
}

export default Music
