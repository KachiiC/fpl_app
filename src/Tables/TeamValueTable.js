import React,{useState, useEffect} from 'react'
// Data
import PlayerListDataExample from 'Data/PlayerListData'
// Components
import Table from 'react-bootstrap/Table'
import CircularProgress from '@material-ui/core/CircularProgress'

const TeamValueTable = () => {

    const [playerListData, setplayerListData] = useState(PlayerListDataExample)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        fetch("https://kachiis-rest.herokuapp.com/api/fpl_players/")
        .then(response => response.json())
        .then(playerDataFromServer => {
            setplayerListData(playerDataFromServer)
            setIsLoading(false)
        })
        .catch(err => console.log(err))
    }, [])

    const allOfThePointsScored = [];
    const allOfTheAverages = [];
    const numberOfMatchDays = playerListData[0].matches.length;
    const numberOfPlayers = playerListData.length;
    
    for (let y = 0; y < numberOfMatchDays; y++) {
        for (let x = 0; x < playerListData.length; x++) {
            allOfThePointsScored.push(
                Math.floor(playerListData[x].matches[y].team_value)
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
    
    const GameWeeks = playerListData[0].matches.map((match) => 
    <th>GW{match.gameweek}</th>)

    const sortedByTeamValue = playerListData.sort((a, b) => b.matches[b.matches.length - 1].team_value - a.matches[a.matches.length - 1].team_value)

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
                <td>{playerListData.indexOf(player) + 1}</td>
                <td>{player.player_name}</td>
                {playersWeek}
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
                </tr>
                {playerGameWeeks}
                <tr>
                    <td>-</td>
                    <td>Average</td>
                    {displayAverages}
                </tr>
            </tbody>
        </Table>
    )

    return (
        <div className="table-container">
            <h2>Team Value</h2>
            {renderTable}
        </div>
    )

}

export default TeamValueTable