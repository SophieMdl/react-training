import React from 'react'

const ListMusics = ({ music, addToPlaylist, playMusic }) =>{
    return(
      <div>
        {music.title}
        <button onClick={() => addToPlaylist(music.id)}>add to playlist</button>
        <button onClick={() => playMusic(music)}>play</button>
      </div>
    )
}

export default ListMusics
