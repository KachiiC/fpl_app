import { TableCellType, TransferCellType } from "../tools/TableCellType"
import TablePlayersCell from "./TablePlayersCell"

const PlayersWeek = (props: any) => {

    const {
        player,
        averages,
        type
    } = props


    const Matches =  props.player.matches.map((matchweek: any) => {

        const GameweekAverage = averages[player.matches.indexOf(matchweek)]

        const ValueLogic = matchweek[type]

        // Value and Bench detirmines the following varriables
        var RatingLogic
        
        // Detirmines type of cell
        switch (type) {
            case "bench_points":
                RatingLogic = TableCellType(ValueLogic, GameweekAverage, "reverse")
                break
            case "transfers_cost":
                RatingLogic = TransferCellType(ValueLogic)
                break
            default:
                RatingLogic = TableCellType(ValueLogic, GameweekAverage)
        }
        
        // Returns cell and color of cell based on weekly performance and type
        return (
            <TablePlayersCell
                key={`${player.player_name} gw-${player.matches.indexOf(matchweek)}`}
                type={type}
                rating={RatingLogic}
                value={ValueLogic}
            />
        )
    })

    return (
        <>
            {Matches}
        </>
    )
}

export default PlayersWeek