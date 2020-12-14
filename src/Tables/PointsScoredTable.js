import React,{useState, useEffect} from 'react'
import PlayerListDataExample from '../Data/PlayerListData'
import Table from 'react-bootstrap/Table'

const PointsScoredTable = () => {

    const [playerListData, setplayerListData] = useState(PlayerListDataExample)

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/fpl_players/")
        .then(response => response.json())
        .then(playerDataFromServer => {
            setplayerListData(playerDataFromServer)
        })
        .catch(err => console.log(err))
    }, [])
    
    const GameWeeks = playerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)
    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = playerListData[0].matches.length;
    const numberOfPlayers = playerListData.length;
    const sortedByPoints = playerListData.sort((a, b) => b.points_total - a.points_total)
    
    for (let y=0; y < numberOfMatchDays; y++) {
        for (let x=0; x < playerListData.length; x++) {
            allOfThePointsScored.push(playerListData[x].matches[y].game_week_points);
        }
    }
    
    for (let i=0; i < allOfThePointsScored.length; i += numberOfPlayers) {
        allOfTheAverages.push(
            allOfThePointsScored.slice(i, i + numberOfPlayers)
            .reduce((a, b) => a + b) /numberOfPlayers
        )
    }
        
    const totalAverage = Math.floor(
        playerListData.map((player) => player.points_total).reduce((a,b) => a+b)/ numberOfPlayers
    )
        
    const playerGameWeeks = sortedByPoints.map((player, index) => {
        
        const playersWeek = player.matches.map((matchweek, index) => {
            
            const renderLogic = matchweek.game_week_points > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            "good": "bad"
            
            return (
                <td className={`${renderLogic}-week`} key={index}>
                    {matchweek.game_week_points}
                </td>
            )
        })
        
        const totalPoints = player.points_total
        const averageCompare = totalPoints > totalAverage ? "good" : "bad"
        
        return (
            <tr key={index}>
                <td>{playerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
                <td className={`${averageCompare}-week`}>{totalPoints}</td>
            </tr>
        )
    })

    const displayAverages = allOfTheAverages.map((average, index) => <td key={index}>{average}</td>)

    return (
        <div className="table-container">
            <h2>Current Table</h2>
            <Table responsive>
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
            </Table>
        </div>
    )

}

export default PointsScoredTable