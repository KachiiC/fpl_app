import React from 'react'
import PlayerListData from '../Data/PlayerListData'

const WeekByWeekTable = () => {

    
    const GameWeeks = PlayerListData[0].matches.map((match) => <th>GW{match.gameweek}</th>)

    const allOfThem = [];
    const allOfTheAverages = [];

    for (let x = 0; x < PlayerListData[0].matches.length - 1; x++) {
        for (let y = 0; y < PlayerListData[0].matches.length - 1; y++) {
            allOfThem.push(PlayerListData[y].matches[x].points_total);
        }
    }

    for (let i = 0; i < allOfThem.length -1;i += PlayerListData[0].matches.length - 1) {
        allOfTheAverages.push(
            allOfThem.slice(i, i + PlayerListData[0].matches.length - 1)
            .reduce((a, b) => a + b) / PlayerListData.length
        );
    }


    const displayAverages = allOfTheAverages.map((average) => <td>{average}</td>)
    const averageTotal  = (PlayerListData.map((player) => player.matches[player.matches.length -1].points_total).reduce((a,b) => a+b)/PlayerListData.length)

    const playerGameWeeks = PlayerListData.map((player) => {

        const playersWeek = player.matches.map((matchweek) => {
            const renderLogic = matchweek.points_total > allOfTheAverages[player.matches.indexOf(matchweek)] ?
            <td className="good-week">{matchweek.points_total}</td> : <td className="bad-week">{matchweek.points_total}</td>

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
            <h1>Entire Season Table</h1>
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
                        <td>{averageTotal}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )

}

export default WeekByWeekTable