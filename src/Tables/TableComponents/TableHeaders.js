import React from 'react'

const TableHeaders = (props) =>  {

    const GameWeeksLogic = props.game_weeks.map((match) => 
        <th>GW{match.gameweek}</th>
    )

    // if it isn't points_total return a total header
    const PointsTotal = () => {
        if (props.type !== "points_total" && props.type !== "team_value") {
            return <th>Total</th>
        }
    }

    return (
        <tr>
            <th>Rank</th>
            <th>Players</th>
            {GameWeeksLogic}
            {PointsTotal()}
        </tr>
    )
}

export default TableHeaders