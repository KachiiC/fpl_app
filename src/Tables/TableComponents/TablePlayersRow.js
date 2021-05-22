import React from 'react'
// COMPONENTS
import TablePlayersCell from './TablePlayersCell'

const TablePlayersRow = (props) => {

    const renderTotalLogic = () => {
        if (props.type !== "points_total" && props.type !== "team_value") {
            return (
                <TablePlayersCell
                    rating={props.total_rating}
                    value={props.total_points}
                />
            )
        }
    }
    
    return (
        <tr>
            <td>{props.rank}</td>
            <td>{props.player_name}</td>
            {props.game_weeks}
            {renderTotalLogic()}
        </tr>
    )
}

export default TablePlayersRow
