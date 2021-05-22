import React from 'react'
// Data
import PlayeDataExample from 'Data/PlayerListData'
import SiteFetcher from 'Components/SiteFetcher'
import SiteRender from 'Components/SiteRender'
// Components
import DisplayTable from './TableComponents/DisplayTable'
import TablePlayersRow from './TableComponents/TablePlayersRow'
import TablePlayersCell from './TableComponents/TablePlayersCell'
import TableCellType from './TableComponents/TableCellType'

const FplLink = "https://kachiis-rest.herokuapp.com/api/fpl_players_refresh"

const PointsTable = (props) => {

    // FPL FETCHING DATA
    const SiteFetch = SiteFetcher(FplLink, PlayeDataExample)
    //FPL Data
    const FplData = SiteFetch.response

    //// SET UPS ////
    // Array of all points score begins as empty
    const AllOfThePointsScored = []
    const AllOfTheAverages = []
    
    // Type Logic
    const dataType = props.type
    
    // For loop logic that pushes points scored of each player
    // Matches.length is detirmined by number of game weeks 
    // FplData.length is detirmined by the number of Players
    for (let y=0; y < FplData[0].matches.length; y++) {
        for (let x=0; x < FplData.length; x++) {
            // Points are detirmed by which dataType is passed through table
            // CHANGE THIS FOR OTHER TABLES 
            switch (dataType) {
                case "weekly_points":
                    // Pushes points scored by each player each game week
                    AllOfThePointsScored.push(FplData[x].matches[y].game_week_points);
                    break;
                case "points_total":  
                    // Pushes points total of each player, each week
                    AllOfThePointsScored.push(FplData[x].matches[y].points_total);
                    break;
                case "team_value":
                    // Pushes team value of each player each game week
                    AllOfThePointsScored.push(FplData[x].matches[y].team_value);
                    break;
                case "bench_points":
                    // Pushes bench points of each player each game week
                    AllOfThePointsScored.push(Math.floor(FplData[x].matches[y].bench_points))
                    break;
                default:
                    // // Return game week points as default
                    // AllOfThePointsScored.push(FplData[x].matches[y].game_week_points);
            }
        }
    }
    
    // Average points detirmined by number of players and gameweek
    for (let i=0; i < AllOfThePointsScored.length; i += FplData.length) {
        // renders the average of each gameweek and pushes to the array
        AllOfTheAverages.push(
            AllOfThePointsScored.slice(i, i + FplData.length)
            .reduce((a, b) => a + b) 
            / FplData.length
        )
    }

    // Total Average  and Sort will be based on value types
    var TotalsAverage, SortLogic

    // Total of all average of all players
    switch (dataType) {

        case "weekly_points":
            // Returns the Average Points Total
            TotalsAverage = FplData.map(player => 
                player.points_total
            ).reduce((a, b) => a + b) / FplData.length
            // Already sorted according to points so can leave as default
            SortLogic = FplData
            break;
        case "bench_points":
            // Returns the Average Bench Points Total
            TotalsAverage = FplData.map(player => player.matches
                    .map(match => match.bench_points)
                    .reduce((a, b) => a + b))
                    .reduce((a, b) => a + b) 
                    / FplData.length
            // sort by who has the most bench points in total
            SortLogic = FplData.sort((a, b) => {

                const reducer = (item) => item.matches.map((week) => 
                        week.bench_points
                    )
                    .reduce((a,b) => a + b)

                return reducer(a) - reducer(b)
            }
            )
            break
        case "team_value":
            // sort by highest team value 
            SortLogic = FplData.sort((a, b) => 
                b.matches[b.matches.length - 1].team_value 
                - 
                a.matches[a.matches.length - 1].team_value
            )
            break
        default:
            // default 
            SortLogic = FplData
    }

    // Map each player and returns their points per gameweek
    const PlayerGameWeeks = SortLogic.map((player, index) => {

        // Returns each game week of the player as a Table cell
        const PlayersWeek = player.matches.map((matchweek, index) => {

            // Value and Bench detirmines the following varriables
            // Intitally set as empty
            var ValueLogic, BenchLogic
            
            // Detirmines type of cell
            switch (dataType) {
                case "points_total":
                    // returns points total end of matchweek
                    ValueLogic = matchweek.points_total
                    break;
                case "weekly_points":
                    // returns points scored that of matchweek
                    ValueLogic = matchweek.game_week_points
                    break
                case "team_value":
                    // returns team value by the end of matchweek
                    ValueLogic = matchweek.team_value
                    break
                case "bench_points":
                    // returns points scored by players on your bench
                    ValueLogic = matchweek.bench_points
                    // If value is higher that average will return bad
                    // the less points score by bench players the better
                    BenchLogic = ValueLogic > AllOfTheAverages[player.matches.indexOf(matchweek)] ? 
                        "bad" : "good"
                    break
                default:
                    // default is blank
            }

            // Rating detirmines color of the cell based comparrison to average 
            const ratingLogic = dataType === "bench_points" ? 
                // Logic reversed for bench points
                BenchLogic
                :
                // Returns green or red cell depending matchweek point type's comparrison to average
                TableCellType (ValueLogic, AllOfTheAverages[player.matches.indexOf(matchweek)])
            
            // Returns cell and color of cell based on weekly performance and type
            return (
                <TablePlayersCell
                    key={index}
                    type={dataType}
                    rating={ratingLogic}
                    value={ValueLogic}
                />
            )
        })
        
        // Total Logic detirmines total of value across the season
        // Intitally set as empty
        var TotalsLogic, BenchTotalsLogic

        // Switch will only active for bench points and weekly points
        switch(dataType) {
            case "bench_points":
                // Gets players total number of bench points
                TotalsLogic = player.matches.map((matchweek) => matchweek.bench_points)
                    .reduce((a,b) => a + b)
                // If value is higher that average will return bad
                // the less points score by bench players the better
                BenchTotalsLogic = TotalsLogic > TotalsAverage ? 
                    "bad" : "good"
                break;
            case "weekly_points":
                // Gets players total number of points
                TotalsLogic = player.points_total
                break
            default:
                // default is blank
        }

        // If total of current player is over the average, returns "good" or else it returns bad
        const TotalRatingLogic = dataType === "bench_points" ?
            // Logic reversed for bench points
            BenchTotalsLogic
            :
            // Returns green or red cell total in comparrison to average
            TableCellType(TotalsLogic, TotalsAverage)
        
        return (
            <TablePlayersRow
                key={index}
                type={props.type}
                rank={FplData.indexOf(player) + 1}
                player_name={player.player_name}
                game_weeks={PlayersWeek}
                total_rating={TotalRatingLogic}
                total_points={TotalsLogic}
            />
        )
    })
    
    const TableLogic = (
        <DisplayTable
            title={props.title}
            data={FplData}
            type={props.type}
            rows={PlayerGameWeeks}
            averages={AllOfTheAverages}
            total_averages={TotalsAverage}
        />
    )

    return (
        <div className="table-container">
            <SiteRender data={SiteFetch} component={TableLogic} />
        </div>
    )

}

export default PointsTable