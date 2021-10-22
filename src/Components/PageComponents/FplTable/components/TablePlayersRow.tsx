// COMPONENTS
import TablePlayersCell from './TablePlayersCell'

const TablePlayersRow = (props: any) => {

    const {
        type,
        total_points,
        total_rating,
        rank,
        player_name,
        game_weeks

    } = props

    const renderTotalLogic = () => {
        if (type !== "points_total" && type !== "team_value") {
            return (
                <TablePlayersCell
                    rating={total_rating}
                    value={total_points}
                    type={type}
                />
            )
        }
    }
    
    return (
        <tr>
            <td>{rank}</td>
            <td>{player_name}</td>
            {game_weeks}
            {renderTotalLogic()}
        </tr>
    )
}

export default TablePlayersRow
