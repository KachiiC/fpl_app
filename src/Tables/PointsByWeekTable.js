import React from 'react'
import PlayerListData from '../Data/PlayerListData'
import Table from 'react-bootstrap/Table'

const PointsByWeekTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)
    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = PlayerListData[0].matches.length;
    const numberOfPlayers = PlayerListData.length;
    const sortedByPoints = PlayerListData.sort((a, b) => b.points_total - a.points_total)
    
    for (let y=0; y < numberOfMatchDays; y++) {
        for (let x=0; x < PlayerListData.length; x++) {
            allOfThePointsScored.push(PlayerListData[x].matches[y].points_total);
        }
    }
    
    for (let i=0; i < allOfThePointsScored.length; i += numberOfPlayers) {
        allOfTheAverages.push(
            allOfThePointsScored.slice(i, i + numberOfPlayers)
            .reduce((a, b) => a + b) /numberOfPlayers
            )
    }
        
    const playerGameWeeks = sortedByPoints.map((player, index) => {
        
        const playersWeek = player.matches.map((matchweek, index) => {
            
            const renderLogic = matchweek.points_total > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            "good" : "bad"
            
            return (
                <td className={`${renderLogic}-week`} key={index}>
                    {matchweek.points_total}
                </td>
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
    
    const displayAverages = allOfTheAverages.map((average, index) => <td key={index}>{average}</td>)
    
    return (
        <div className="table-container">
            <h2>Week by Week Totals</h2>
            <Table responsive>
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
            </Table>
        </div>
    )

}

export default PointsByWeekTable