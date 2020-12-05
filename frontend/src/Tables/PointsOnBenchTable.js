import React from 'react'
import PlayerListData from '../Data/PlayerListData'

const PointsOnBenchTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)

    const sortedByBenchPointsLost = PlayerListData.sort((a, b) => {
        return b.matches.map((week) => week.bench_points).reduce((a,b) => a+b) - a.matches.map((week) => week.bench_points).reduce((a,b) => a+b)
    })

    const playerGameWeeks = sortedByBenchPointsLost.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {
            return (
                <td>{matchweek.bench_points}</td>
            )
        })

        const totalLost = player.matches.map((matchweek) =>  matchweek.bench_points).reduce((a,b) => a+b)

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
            <h1>Points Lost on bench</h1>
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

export default PointsOnBenchTable