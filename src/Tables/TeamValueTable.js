import React from 'react'
import PlayerListData from 'Data/PlayerListData'

const TeamValueTable = () => {

    const allOfThem = [];
    const allOfTheAverages = [];
    const numberOfWeeks = PlayerListData[0].matches.length

    for (let x = 0; x < numberOfWeeks; x++) {
        for (let y = 0; y < PlayerListData.length; y++) {
            allOfThem.push(PlayerListData[y].matches[x].game_week_points);
        }
    }

    for (let i = 0; i < allOfThem.length; i += numberOfWeeks) {
        allOfTheAverages.push(
            allOfThem.slice(i, i + numberOfWeeks)
            .reduce((a, b) => a + b) / PlayerListData.length
        );
    }

    const displayAverages = allOfTheAverages.map((average) => <td>{average}</td>)
    
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
            <h2>Team Value</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Players</th>
                        {GameWeeks}
                    </tr>
                    {playerGameWeeks}
                    <tr>
                        <td>-</td>
                        <td>Average</td>
                        {displayAverages}
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default TeamValueTable