import React from 'react'

const ListMusics = ({music, removeFromPlaylist, playMusic }) =>{
    return(
      <div>
        {music.title}
        <button onClick={() => removeFromPlaylist(music.id)}>Remove from playlist</button>
        <button onClick={() => playMusic(music)}>play</button>
      </div>
    )
}

export default ListMusics
