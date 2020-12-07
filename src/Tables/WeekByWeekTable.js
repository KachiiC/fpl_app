import React from 'react'
import PlayerListData from '../Data/PlayerListData'

const WeekByWeekTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)

    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = PlayerListData[0].matches.length;
    const numberOfPlayers = PlayerListData.length;
    
    for (let y = 0; y < numberOfMatchDays; y++) {
        for (let x = 0; x < PlayerListData.length; x++) {
            allOfThePointsScored.push(PlayerListData[x].matches[y].points_total);
        }
    }
    
    for (let i = 0; i < allOfThePointsScored.length; i += numberOfPlayers) {
        allOfTheAverages.push(
            allOfThePointsScored.slice(i, i + numberOfPlayers)
            .reduce((a, b) => a + b) /numberOfPlayers
        )
    }

    const displayAverages = allOfTheAverages.map((average, index) => <td key={index}>{average}</td>)
    const sortedByPoints = PlayerListData.sort((a, b) => b.matches[b.matches.length - 1].points_total - a.matches[a.matches.length - 1].points_total)

    const playerGameWeeks = sortedByPoints.map((player, index) => {

        const playersWeek = player.matches.map((matchweek, index) => {
            const renderLogic = matchweek.points_total > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            <td className="good-week" key={index}>{matchweek.points_total}</td> : <td className="bad-week">{matchweek.points_total}</td>

            return (
                <>
                    {renderLogic}
                </>

            )
        })

        return (
            <tr key={index}>
                <td>{PlayerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
            </tr>
        )
    })

    return (
        <div className="table-container">
            <h2>Week by Week Totals</h2>
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

export default WeekByWeekTable