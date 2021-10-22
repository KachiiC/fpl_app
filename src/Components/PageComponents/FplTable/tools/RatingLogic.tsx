import { TableCellType } from "./TableCellType"

const RatingLogic = (type: string, total: number, average_total: number) => {

    var TotalRatingLogic = TableCellType(total, average_total)
        
    // Switch will only active for bench points and weekly points
    switch(type) {
        // If value is higher that average will return bad,
        // the less points scored for these the better
        case "bench_points":
        case "transfers_cost":
            TotalRatingLogic = TableCellType(total, average_total, "reverse")
            break
    }

    return TotalRatingLogic
}

export default RatingLogic