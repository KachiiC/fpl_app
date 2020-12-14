import React, { useEffect, useState } from 'react'
// Components
import PlayerDetailTable from 'PlayerDetail/PlayerDetailTable'
// Data
import PlayerListData from 'Data/PlayerListData'

const ListOfPlayers = () => {
    
    const [playerListData, setPlayerListData] = useState(PlayerListData)
    
    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/fpl_players/")
        .then(response => response.json())
        .then(playerDataFromServer => {
            setPlayerListData(playerDataFromServer)
        })
        .catch(err => console.log(err))
    },[])
    
    const renderPlayerPageData = playerListData.map((player) => {
        
        return {
            name: player.player_name,
            content: <PlayerDetailTable data={player}/>
        }
    })
    
    return renderPlayerPageData
    
}

const PlayerPageData = [ListOfPlayers]

export default PlayerPageData