import React from 'react'
import PlayerListData from 'Data/PlayerListData'

const TeamValueTable = () => {

    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = PlayerListData[0].matches.length;
    const numberOfPlayers = PlayerListData.length;
    
    for (let y = 0; y < numberOfMatchDays; y++) {
        for (let x = 0; x < PlayerListData.length; x++) {
            allOfThePointsScored.push(
                Math.floor(PlayerListData[x].matches[y].team_value)
            );
        }
    }
    
    for (let i = 0; i < allOfThePointsScored.length; i += numberOfPlayers) {
        allOfTheAverages.push(
            allOfThePointsScored.slice(i, i + numberOfPlayers)
            .reduce((a, b) => a + b) /numberOfPlayers
        )
    }

    const displayAverages = allOfTheAverages.map((average) => <td>{Math.floor(average)/10}M</td>)
    
    const GameWeeks = PlayerListData[0].matches.map((match) => 
    <th>GW{match.gameweek}</th>)

    const sortedByTeamValue = PlayerListData.sort((a, b) => b.matches[b.matches.length - 1].team_value - a.matches[a.matches.length - 1].team_value)

    const playerGameWeeks = sortedByTeamValue.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {

            const renderLogic = matchweek.team_value > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            <td className="good-week">{Math.floor(matchweek.team_value)/10}</td> : 
            <td className="bad-week">{Math.floor(matchweek.team_value)/10}</td>

            return (
                <>
                    {renderLogic}
                </>
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