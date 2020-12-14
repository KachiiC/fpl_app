import React,{useState, useEffect} from 'react'
import PlayerListDataExample from '../Data/PlayerListData'
import Table from 'react-bootstrap/Table'

const PointsOnBenchTable = () => {

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

    const displayAverages = allOfTheAverages.map((average) => <td>{average}</td>)


    const sortedByBenchPointsLost = playerListData.sort((a, b) => {
        return b.matches.map((week) => week.bench_points).reduce((a,b) => a+b) - a.matches.map((week) => week.bench_points).reduce((a,b) => a+b)
    })

    const playerGameWeeks = sortedByBenchPointsLost.map((player) => {
        
        
        const playersWeek = player.matches.map((matchweek) => {

            const renderLogic = matchweek.bench_points > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            <td className="bad-week">{Math.floor(matchweek.bench_points)}</td>:
            <td className="good-week">{Math.floor(matchweek.bench_points)}</td> 

            return (
                <>{renderLogic}</>
            )
        })

        const totalLost = player.matches.map((matchweek) =>  matchweek.bench_points).reduce((a,b) => a+b)

        return (
            <tr>
                <td>{playerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
                <td>{totalLost}</td>
            </tr>
        )
    })

    return (
        <div className="table-container">
            <h1>Points Lost on bench</h1>
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
                        <td></td>
                    </tr>
                </tbody>
            </Table>
        </div>
    )

}

export default PointsOnBenchTable