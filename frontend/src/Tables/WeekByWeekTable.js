import React from 'react'
import PlayerListData from '../Data/PlayerListData'

const WeekByWeekTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match) => 
    <th>GW{match.gameweek}</th>)

    const playerGameWeeks = PlayerListData.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {
            return (
                <td>{matchweek.points_total}</td>
            )
        })

        return (
            <tr>
                <td>{PlayerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
            </tr>
        )
    })

    return (
        <div className="table-container">
            <h1>Entire Season Table</h1>
            <table>
                <tr>
                    <th>Rank</th>
                    <th>Players</th>
                    {GameWeeks}
                </tr>
                {playerGameWeeks}
            </table>
        </div>
    )

}

export default WeekByWeekTable