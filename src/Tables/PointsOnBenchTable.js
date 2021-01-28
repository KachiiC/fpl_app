import React,{useState, useEffect} from 'react'
// Data
import PlayerListDataExample from 'Data/PlayerListData'
// Components
import Table from 'react-bootstrap/Table'
import CircularProgress from '@material-ui/core/CircularProgress'

const PointsOnBenchTable = () => {

    const [playerListData, setplayerListData] = useState(PlayerListDataExample)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/fpl_players_refresh")
        .then(response => response.json())
        .then(playerDataFromServer => {
            setplayerListData(playerDataFromServer)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [])
    
    const GameWeeks = playerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)
    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = playerListData[0].matches.length;
    const numberOfPlayers = playerListData.length;
    
    for (let y = 0; y < numberOfMatchDays; y++) {
        for (let x = 0; x < playerListData.length; x++) {
            allOfThePointsScored.push(
                Math.floor(playerListData[x].matches[y].bench_points)
            );
        }
    }
    
    for (let i = 0; i < allOfThePointsScored.length; i += numberOfPlayers) {
        allOfTheAverages.push(
            allOfThePointsScored.slice(i, i + numberOfPlayers)
            .reduce((a, b) => a + b) /numberOfPlayers
        )
    }

    const displayAverages = allOfTheAverages.map((average) => <td>{Math.floor(average)}</td>)
    const totalAverage = allOfTheAverages.reduce((a,b) => a+b)

    const sortedByBenchPointsLost = playerListData.sort((a, b) => {
        return b.matches.map((week) => week.bench_points).reduce((a,b) => a+b) - a.matches.map((week) => week.bench_points).reduce((a,b) => a+b)
    })

    const playerGameWeeks = sortedByBenchPointsLost.map((player) => {
        
        const playersWeek = player.matches.map((matchweek) => {

            const renderLogic = matchweek.bench_points > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            "bad":"good"

            return (
                <td className={`${renderLogic}-week`}>
                    {matchweek.bench_points}
                </td>
            )
        })

        const totalLost = player.matches.map((matchweek) =>  matchweek.bench_points).reduce((a,b) => a+b)

        return (
            <tr>
                <td>{playerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
                <td>{Math.floor(totalLost)}</td>
            </tr>
        )
    })

    const renderTable = isLoading ? <CircularProgress /> : (
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
                    <td>{Math.floor(totalAverage)}</td>
                </tr>
            </tbody>
        </Table>

    )

    return (
        <div className="table-container">
            <h2>Points Lost on bench</h2>
            {renderTable}
        </div>
    )

}

export default PointsOnBenchTable