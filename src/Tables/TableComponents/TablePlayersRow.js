import React from 'react'
// COMPONENTS
import TablePlayersCell from './TablePlayersCell'

const TablePlayersRow = (props) => {

    const renderTotalLogic = () => {
        if (props.type !== "points_total") {
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
            <td className="player-rank rank-name">
                {props.rank}
            </td>
            <td className="player-name rank-name">
                {props.player_name}
            </td>
            {props.game_weeks}
            {renderTotalLogic()}
        </tr>
    )
}

export default TablePlayersRow
