import React,{useState, useEffect} from 'react'
import PlayerListDataExample from '../Data/PlayerListData'
import Table from 'react-bootstrap/Table'

const GameWeekTransfersTable = () => {

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

    const sortTeamsByTransferPoints = playerListData.sort((a, b) => {
        return b.matches.map((week) => week.game_week_transfers_cost).reduce((a,b) => a+b) - a.matches.map((week) => week.game_week_transfers_cost).reduce((a,b) => a+b)
    })

    const playerGameWeeks = sortTeamsByTransferPoints.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {
            return (
                <td>{matchweek.game_week_transfers_cost}</td>
            )
        })

        const totalLost = player.matches.map((matchweek) =>  matchweek.game_week_transfers_cost).reduce((a,b) => a+b)

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
            <h1>Points Spent on Transfers</h1>
            <Table responsive>
                <tbody>
                    <tr>
                        <th>Rank</th>
                        <th>Players</th>
                        {GameWeeks}
                        <th>Total</th>
                    </tr>
                    {playerGameWeeks}
                </tbody>
            </Table>
        </div>
    )

}

export default GameWeekTransfersTable