import React from 'react'
// Components
import PlayerDetailTable from 'PlayerDetail/PlayerDetailTable'
// Data
import PlayerListData from 'Data/PlayerListData'


const PlayerPageData = PlayerListData.map((player) => {
        return {
            name: player.player_name,
            content: <PlayerDetailTable data={player}/>
        }
    })



export default PlayerPageData