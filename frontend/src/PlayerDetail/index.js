import React, { useState } from 'react'
// Component
import PlayerDetailTable from './PlayerDetailTable'
import PlayerListData from 'Data/PlayerListData'

const PlayerDetail = () => {

    const [selectedPlayer, setSelectedPlayer] = useState(Math.floor(Math.random() * 11))

    const alphabeticallySort = PlayerListData.sort((a,b) => a.player_name - b.player_name)

    const playerSelectionTabs = alphabeticallySort.map((player, index) => {

        return (
            <div key={index}
                className="player-single-tab" 
                onClick={() => setSelectedPlayer(alphabeticallySort.indexOf(player))}>
                <h4>{player.player_name}</h4>
            </div>
        )
        
    })

    return (
        <div>
            <div className="player-tabs-row">
                {playerSelectionTabs}
            </div>
            <div className="display-content">
                <PlayerDetailTable data={alphabeticallySort[selectedPlayer]}/>
            </div>
        </div>
    )

}

export default PlayerDetail