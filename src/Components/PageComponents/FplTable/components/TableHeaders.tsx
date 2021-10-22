import { FplMatchProps } from "Props/Pages/FplTableProps"

interface TableHeadersProps {
    type: string;
    game_weeks: FplMatchProps[]
}

const TableHeaders = (props: TableHeadersProps) =>  {

    const {
        game_weeks,
        type
    } = props

    const GameWeeksLogic = game_weeks.map(match => (
        <th key={`${type} gw-${game_weeks.indexOf(match)}`}>
            GW{match.gameweek}
        </th>
    ))

    // if it isn't points_total return a total header
    const PointsTotal = () => {
        if (type !== "points_total" && type !== "team_value") {
            return <th>Total</th>
        }
    }

    return (
        <tr key={type}>
            <th>Rank</th>
            <th>Players</th>
            {GameWeeksLogic}
            {PointsTotal()}
        </tr>
    )
}

export default TableHeaders