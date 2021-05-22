import React from 'react'
// COMPONENTS
import Table from 'react-bootstrap/Table'
import PlayerMenus from 'Data/PlayerMenus'

const PlayerDetailTable = (props) => {

    const PlayerData = props.data

    const menuHeadings = PlayerMenus.map((menu) => <th>{menu}</th>)

    const gameWeeks = PlayerData.matches.map((week) => {

        return (
            <tr>
                <td>{week.gameweek}</td>
                <td>{week.game_week_points}</td>
                <td>{week.points_total}</td>
                <td>£{week.team_value / 10}M</td>
                <td>{week.game_week_transfers}</td>
                <td>{week.game_week_transfers_cost}</td>
                <td>{week.bench_points}</td>
            </tr>
        )
    })

    const averageTeamValue = (PlayerData.matches.map(
        player => player.team_value /10
        ).reduce(
            (a,b) => a + b
        ) / PlayerData.matches.length
    ).toFixed(2)

    // Transfers
    const totalTransfers = (PlayerData.matches.map(
        player => player.game_week_transfers
        ).reduce(
            (a,b) => a + b
        )
    )

    const averageTransfers = (totalTransfers / PlayerData.matches.length).toFixed(1)

    // Transfer Costs
    const totalTransferCosts = (PlayerData.matches.map(
        player => player.game_week_transfers_cost
        ).reduce(
            (a,b) => a + b
        )
    )

    const averageTransfersCosts = (totalTransferCosts / PlayerData.matches.length).toFixed(1)

    // Bench Points
    const totalBenchPoints = (PlayerData.matches.map(
        player => player.bench_points
        ).reduce(
            (a,b) => a + b
        )
    )

    const averageBenchPoints = (totalBenchPoints / PlayerData.matches.length).toFixed(2)

    // Chips Played
    const displayAllChips = PlayerData.chips.map((chip, index) => (

            <tr key={index}>
                <td>{chip.chip_name}</td>
                <td>{chip.chip_date}</td>
                <td>{chip.chip_matchday}</td>
            </tr>
        )
    )

    return (
        <>
        <div className="table-container">
            <h1>{PlayerData.player_name}</h1>
            <Table responsive>
                <tbody>
                    <tr>
                        {menuHeadings}
                    </tr>
                    {gameWeeks}
                    <tr>
                        <td>Averages | Totals</td>
                        <td>{(PlayerData.points_total/PlayerData.matches.length).toFixed(1)}</td>
                        <td>{PlayerData.points_total}</td>
                        <td>£{averageTeamValue}M</td>
                        <td>
                            <b>AVG:</b> {averageTransfers} | <b>TOTAL:</b> {totalTransfers}
                        </td>
                        <td>
                            <b>AVG:</b> {averageTransfersCosts} | <b>TOTAL:</b> {totalTransferCosts} 
                        </td>
                        <td>
                            <b>AVG:</b> {averageBenchPoints} | <b>TOTAL:</b> {totalBenchPoints} 
                        </td>
                    </tr>
                </tbody>
            </Table>
        </div>
        <div className="second-table-container">
            <h1>Chips Played</h1>
            <Table responsive>
                <tbody>
                    <tr>
                        <th>Game Week</th>
                        <th>Chip Played</th>
                        <th>Date</th>
                    </tr>
                    {displayAllChips}
                </tbody>
            </Table>
        </div>
        </>
    )

}

export default PlayerDetailTable