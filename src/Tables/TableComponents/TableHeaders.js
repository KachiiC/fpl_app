import React from 'react'

const TableHeaders = (props) =>  {

    const GameWeeksLogic = props.game_weeks.map((match) => 
        <th>GW{match.gameweek}</th>
    )

    // if it isn't points_total return a total header
    const PointsTotal = () => {
        if (props.type !== "points_total") {
            return <th>Total</th>
        }
    }

    return (
        <tr>
            <th className="player-rank rank-name">Rank</th>
            <th className="player-name rank-name">Players</th>
            {GameWeeksLogic}
            {PointsTotal()}
        </tr>
    )
}

export default TableHeaders