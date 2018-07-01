import React from 'react'
import { Button, List } from 'semantic-ui-react'

const ListMusics = ({ music, addToPlaylist, playMusic }) =>{
    return(
      <List.Item>
        <div>{music.title}</div>
        <Button size='mini' basic color='green' onClick={() => addToPlaylist(music.id)}>+</Button>
        <Button size='mini' basic color='blue' onClick={() => playMusic(music)}>play</Button>
      </List.Item>
    )
}

export default ListMusics
