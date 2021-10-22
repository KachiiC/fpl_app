// PROPS
import { FplPlayerProps, FplTableProps } from 'Props/Pages/FplTableProps'
// COMPONENTS
import DisplayTable from './components/DisplayTable'
import TablePlayersRow from './components/TablePlayersRow'
import PlayersWeek from './components/PlayerWeek'
// TOOLS
import { AllAveragesData } from './tools/PointsTableData'
import RatingLogic from './tools/RatingLogic'
import { LatestTableSorter, TableSorter } from './tools/TableSorter'
// SITE TOOLS
import { RenderLogic } from 'Tools/FunctionTools'
import { MapReturn } from 'Tools/ObjectDataTools'
import { IntSorter, SiteReducer } from 'Tools/IntergerTools'


const FplTable = (props: FplTableProps) => {

    const { data, type, title } = props

    const typeLogic = RenderLogic(type, "game_week_points")

    // SET UPS
    // matchdays is detirmined by number of game weeks 
    const matchdays = data[0].matches.length
    // number_of_players is detirmined by the number of Players
    const total_players = data.length

    // Average points detirmined by number of players and gameweek
    const point_averages = AllAveragesData(typeLogic, data, matchdays, total_players)

    // Total Average  and Sort will be based on value types
    var averages_total = SiteReducer(point_averages)
    var SortedData = data

    // Total of all average of all players
    switch (typeLogic) {
        case "bench_points":
        case "transfers_cost":
            SortedData = TableSorter(data, typeLogic)
            break
        case "team_value":
            // sort by highest team value 
            SortedData = LatestTableSorter(data, typeLogic)
            break
        default:
            SortedData = IntSorter(data, "points_total", "descending")
    }

    // Map each player and returns their points per gameweek
    const PlayerGameWeeks = SortedData.map((player: FplPlayerProps) => {
        
        // PROPS
        const { matches } = player

        // Returns each game week of the player as a Table cell
        const GameWeek = (
            <PlayersWeek 
                player={player}
                averages={point_averages}
                type={type}
            />
        )
        
        // Total Logic detirmines total of value across the season
        // Intitally set as empty
        const current_total = SiteReducer(
            MapReturn(matches, typeLogic)
        )

        const Rating = RatingLogic(typeLogic, current_total, averages_total)

        return (
            <TablePlayersRow
                key={`${player.player_name} ${typeLogic}`}
                type={typeLogic}
                rank={data.indexOf(player) + 1}
                player_name={player.player_name}
                game_weeks={GameWeek}
                total_points={current_total}
                total_rating={Rating}
            />
        )
    })

    return (
        <div className="table-container">
            <DisplayTable
                key={title}
                title={title}
                data={data}
                type={typeLogic}
                rows={PlayerGameWeeks}
                averages={point_averages}
                total_averages={Math.floor(averages_total)}
            />
        </div>
    )

}

export default FplTable
