import React from 'react'
import { Button, List } from 'semantic-ui-react'
const ListMusics = ({music, removeFromPlaylist, playMusic }) =>{
    return(
      <List.Item>
        <div>{music.title}</div>
        <Button size='mini' basic color='blue' onClick={() => playMusic(music)}>play</Button>
        <Button size='mini' basic color='red' onClick={() => removeFromPlaylist(music.id)}>X</Button>
      </List.Item>
    )
}

export default ListMusics
