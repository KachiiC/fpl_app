import React, { useState , useEffect } from 'react'
// Data
import PlayerListDataExample from 'Data/PlayerListData'
// CSS
import CircularProgress from '@material-ui/core/CircularProgress'
// Components
import Table from 'react-bootstrap/Table'

const PointsOnTransfers = () => {

    const [playerListData, setplayerListData] = useState(PlayerListDataExample)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/fpl_players_refresh")
        .then(response => response.json())
        .then(playerDataFromServer => {
            setplayerListData(playerDataFromServer)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [])
    
    const GameWeeks = playerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)

    const sortTeamsByTransferPoints = playerListData.sort((a, b) => 
        b.matches.map((week) => week.game_week_transfers_cost).reduce(
        (a,b) => a + b) - a.matches.map((week) => week.game_week_transfers_cost).reduce((a,b) => a + b)
    )

    const playerGameWeeks = sortTeamsByTransferPoints.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {

            const renderLogic = ( matchweek.game_week_transfers_cost > 0 ? 
                    (matchweek.game_week_transfers_cost === 4 ? "yellow": "red"): "none" 
                )

            return (
                <td className={`transfer-${renderLogic}`}>
                    {matchweek.game_week_transfers_cost}
                </td>
            )
        })

        const totalLost = player.matches.map((matchweek) =>  matchweek.game_week_transfers_cost).reduce((a,b) => a+b)

        return (
            <tr>
                <td className="player-rank rank-name">{playerListData.indexOf(player) + 1}</td>
                <td className="player-name rank-name">{player.player_name}</td>
                {playersWeek}
                <td>{totalLost}</td>
            </tr>
        )
    })

    const renderTable = isLoading ? <CircularProgress /> : (
        <Table responsive>
            <tbody>
                <tr>
                    <th className="player-rank rank-name">Rank</th>
                    <th className="player-name rank-name">Players</th>
                    {GameWeeks}
                    <th>Total</th>
                </tr>
                {playerGameWeeks}
            </tbody>
        </Table>
    )

    return (
        <div className="table-container">
            <h2>Points Spent on Transfers</h2>
            {renderTable}
        </div>
    )

}

export default PointsOnTransfers