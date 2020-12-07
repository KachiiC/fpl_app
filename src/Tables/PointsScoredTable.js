import React from 'react'
import PlayerListData from '../Data/PlayerListData'
import Table from 'react-bootstrap/Table'

const PointsScoredTable = () => {
    
    const GameWeeks = PlayerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)
    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = PlayerListData[0].matches.length;
    const numberOfPlayers = PlayerListData.length;
    const sortedByPoints = PlayerListData.sort((a, b) => b.points_total - a.points_total)
    
    for (let y=0; y < numberOfMatchDays; y++) {
        for (let x=0; x < PlayerListData.length; x++) {
            allOfThePointsScored.push(PlayerListData[x].matches[y].game_week_points);
        }
    }
    
    for (let i=0; i < allOfThePointsScored.length; i += numberOfPlayers) {
        allOfTheAverages.push(
            allOfThePointsScored.slice(i, i + numberOfPlayers)
            .reduce((a, b) => a + b) /numberOfPlayers
            )
        }
        
        const totalAverage = Math.floor(
            PlayerListData.map((player) => player.points_total).reduce((a,b) => a+b)/ numberOfPlayers
        )
            
        const playerGameWeeks = sortedByPoints.map((player, index) => {
            
            const playersWeek = player.matches.map((matchweek, index) => {
                
                const renderLogic = matchweek.game_week_points > allOfTheAverages[player.matches.indexOf(matchweek)] ?
                "good": "bad"
                
                return (
                    <td className={`${renderLogic}-week`}>
                {matchweek.game_week_points}
            </td>
        )
    })
        
        const totalPoints = player.points_total
        const averageCompare = totalPoints > totalAverage ? "good" : "bad"
        
        return (
            <tr key={index}>
                <td>{PlayerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
                <td className={`${averageCompare}-week`}>{totalPoints}</td>
            </tr>
        )
    })
    
    const displayAverages = allOfTheAverages.map((average) => <td>{average}</td>)

    return (
        <div className="table-container">
            <h2>Current Table</h2>
            <Table responsive>
                <thead>       
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
                </thead>
            </Table>
        </div>
    )

}

export default PointsScoredTable