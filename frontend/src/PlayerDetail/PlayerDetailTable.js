import React from 'react'

const PlayerDetailTable = (props) => {

    const PlayerData = props.data

    const playerMenus = [
        "Game week",
        "Team value",
        "Transfers",
        "Transfer Cost",
        "Bench Points",
        "GW Points",
        "Total",
    ]

    const menuHeadings = playerMenus.map((menu) => <th>{menu}</th>)

    const gameWeeks = PlayerData.matches.map((week) => {

        return (
            <tr>
                <td>{week.gameweek}</td>
                <td>£{week.team_value / 10}M</td>
                <td>{week.game_week_transfers}</td>
                <td>{week.game_week_transfers_cost}</td>
                <td>{week.bench_points}</td>
                <td>{week.game_week_points}</td>
                <td>{week.points_total}</td>
            </tr>
        )
    })


    return (
        <div className="table-container">
            <h1>{PlayerData.player_name}</h1>
            <table>
                <tr>
                    {menuHeadings}
                </tr>
                {gameWeeks}
            </table>
        </div>
    )

}

export default PlayerDetailTable