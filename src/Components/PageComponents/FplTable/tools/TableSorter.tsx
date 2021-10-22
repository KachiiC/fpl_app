import { IntSorter, SiteReducer } from "Tools/IntergerTools"
import { MapReturn } from "Tools/ObjectDataTools"

export const TableSorter = (data: any[], type: string) => {
    return data.sort((a, b) => {

        const reducer = (item: any) => SiteReducer(
            MapReturn(item.matches, type)
        )
        
        return reducer(a) - reducer(b)
    })
}

export const LatestTableSorter = (data: any[], type: string) => {
    return data.sort((a, b) => {
        const reducer = (item: any) => item.matches[b.matches.length - 1][type]
        
        return reducer(b) - reducer(a)
    })
}

export const SortedData = (data: any[], type: string) => {
    var exportData = []

    // Total of all average of all players
    switch (type) {
        case "bench_points":
        case "transfers_cost":
            exportData = TableSorter(data, type)
            break
        case "team_value":
            // sort by highest team value 
            exportData = LatestTableSorter(data, type)
            break
        default:
            exportData = IntSorter(data, "points_total", "descending")
    }

    return exportData
}