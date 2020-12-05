import React from 'react'
import PlayerListData from '../Data/PlayerListData'

const PointsScoredTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match) => 
    <th>GW{match.gameweek}</th>)
    
    const sortedByPoints = PlayerListData.sort((a, b) => b.matches[b.matches.length - 1].points_total - a.matches[a.matches.length - 1].points_total)

    const playerGameWeeks = sortedByPoints.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {
            return (
                <td>{matchweek.game_week_points}</td>
            )
        })

        const totalPoints = player.matches.map((matchweek) =>  matchweek.game_week_points).reduce((a,b) => a+b)
        const totalLost = player.matches.map((matchweek) =>  matchweek.game_week_transfers_cost).reduce((a,b) => a+b)

        return (
            <tr>
                <td>{PlayerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
                <td>{totalPoints - totalLost}</td>
            </tr>
        )
    })

    return (
        <div className="table-container">
            <h1>Current Table</h1>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Players</th>
                    {GameWeeks}
                    <th>Total</th>
                </tr>
                {playerGameWeeks}
            </table>
        </div>
    )

}

export default PointsScoredTable