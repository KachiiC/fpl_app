import React from 'react'
import PlayerListData from 'Data/PlayerListData'

const TeamValueTable = () => {

    
    const GameWeeks = PlayerListData[0].matches.map((match) => 
    <th>GW{match.gameweek}</th>)

    const sortedByTeamValue = PlayerListData.sort((a, b) => b.matches[b.matches.length - 1].team_value - a.matches[a.matches.length - 1].team_value)

    const playerGameWeeks = sortedByTeamValue.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {
            return (
                <td>{matchweek.team_value/10}M</td>
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
            <h1>Team Value</h1>
            <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Players</th>
                        {GameWeeks}
                    </tr>
                    {playerGameWeeks}
                </tbody>
            </table>
        </div>
    )

}

export default TeamValueTable