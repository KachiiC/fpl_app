import { SiteReducer } from "Tools/IntergerTools"

// For loop logic that pushes points scored of each player
export const AllAveragesData = (type: string | number, data: any[], matchdays: number, total_players: number) =>  {

    const points_scored = []
    const point_averages = []

    for (let y=0; y < matchdays ; y++) {
        for (let x=0; x < total_players; x++) {
            const MatchesData = data[x].matches[y]

            // Points are detirmed by which type is passed through table
            points_scored.push(MatchesData[type])
        }
    }

    for (let i=0; i < points_scored.length; i += total_players) {
        // renders the average of each gameweek and pushes to the array
        point_averages.push(
            SiteReducer(points_scored.slice(i, i + total_players))/ total_players
        )
    }

    return point_averages
}