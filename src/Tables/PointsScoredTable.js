import React from 'react'
import PlayerListData from '../Data/PlayerListData'

const PointsScoredTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match, index) => 
    <th key={index}>GW{match.gameweek}</th>)

    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = PlayerListData[0].matches.length;
    const numberOfPlayers = PlayerListData.length;
    
    for (let y = 0; y < numberOfMatchDays; y++) {
        for (let x = 0; x < PlayerListData.length; x++) {
            allOfThePointsScored.push(PlayerListData[x].matches[y].game_week_points);
        }
    }
    
    for (let i = 0; i < allOfThePointsScored.length; i += numberOfPlayers) {
        allOfTheAverages.push(
            allOfThePointsScored.slice(i, i + numberOfPlayers)
            .reduce((a, b) => a + b) /numberOfPlayers
        )
    }

    const displayAverages = allOfTheAverages.map((average) => <td>{average}</td>)
    const averageTransferPoints = PlayerListData.map((player) => player.matches.map((match) => match.game_week_transfers_cost).reduce((a,b) => a+b)).reduce((a,b) => a+b)/PlayerListData.length
    const totalAverage = Math.floor(allOfTheAverages.reduce((a,b) => a+b)) - averageTransferPoints
    
    const sortedByPoints = PlayerListData.sort((a, b) => b.matches[b.matches.length - 1].points_total - a.matches[a.matches.length - 1].points_total)

    const playerGameWeeks = sortedByPoints.map((player, index) => {

        const playersWeek = player.matches.map((matchweek, index) => {
            
            const renderLogic = matchweek.game_week_points > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            <td className="good-week">{matchweek.game_week_points}</td> : <td className="bad-week">{matchweek.game_week_points}</td>

            return (
                <>
                    {renderLogic}
                </>
            )
        })

        const totalPoints = player.matches.map((matchweek) =>  matchweek.game_week_points).reduce((a,b) => a+b)
        const totalLost = player.matches.map((matchweek) =>  matchweek.game_week_transfers_cost).reduce((a,b) => a+b)
        const averageCompare = totalPoints - totalLost > totalAverage ? 
        <td className="good-week">{totalPoints - totalLost}</td> : <td className="bad-week">{totalPoints - totalLost}</td>

        return (
            <tr key={index}>
                <td>{PlayerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
                {averageCompare}
            </tr>
        )
    })

    return (
        <div className="table-container">
            <h2>Current Table</h2>
            <table>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Players</th>
                        {GameWeeks}
                        <th>Total</th>
                    </tr>
                    {playerGameWeeks}
                    <tr>
                        <td>-</td>
                        <td>Average</td>
                        {displayAverages}
                        <td>{totalAverage}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default PointsScoredTable