import React from 'react'
import PlayerListData from '../Data/PlayerListData'

const GameWeekTransfersTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)

    const sortTeamsByTransferPoints = PlayerListData.sort((a, b) => {
        return b.matches.map((week) => week.game_week_transfers_cost).reduce((a,b) => a+b) - a.matches.map((week) => week.game_week_transfers_cost).reduce((a,b) => a+b)
    })

    const playerGameWeeks = sortTeamsByTransferPoints.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {
            return (
                <td>{matchweek.game_week_transfers_cost}</td>
            )
        })

        const totalLost = player.matches.map((matchweek) =>  matchweek.game_week_transfers_cost).reduce((a,b) => a+b)

        return (
            <tr>
                <td>{PlayerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
                <td>{totalLost}</td>
            </tr>
        )
    })

    return (
        <div className="table-container">
            <h1>Points Spent on Transfers</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Players</th>
                        {GameWeeks}
                        <th>Total</th>
                    </tr>
                    {playerGameWeeks}
                </tbody>
            </table>
        </div>
    )

}

export default GameWeekTransfersTable