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
                case "points_total":
                    AllOfThePointsScored.push(FplData[x].matches[y].points_total);
                    break;
                case "weekly_points":
                    AllOfThePointsScored.push(FplData[x].matches[y].game_week_points);
                    break;
                case "team_value":
                    AllOfThePointsScored.push(FplData[x].matches[y].team_value);
                    break;
                case "bench_points":
                    AllOfThePointsScored.push(Math.floor(FplData[x].matches[y].bench_points))
                    break;
                default:
            }
        }
    }
    
    // Average points detirmined by number of players and gameweek
    for (let i=0; i < AllOfThePointsScored.length; i += FplData.length) {
        // renders the average of each gameweek and pushes to the array
        AllOfTheAverages.push(
            AllOfThePointsScored.slice(i, i + FplData.length)
            .reduce((a, b) => a + b) / FplData.length
        )
    }

    console.log(AllOfThePointsScored)
    console.log(AllOfTheAverages)

    // Total of all average of all players
    const TotalsAverage = FplData.map((player) => {
        return player.points_total
    }).reduce((a, b) => a + b) / FplData.length
        
    // Map each player and returns their points per gameweek
    const PlayerGameWeeks = FplData.map((player, index) => {

        // Returns each game week of the player as a Table cell
        const PlayersWeek = player.matches.map((matchweek, index) => {

            var typeLogic, benchLogic

            
            // Detirmines type of cell
            switch (dataType) {
                case "points_total":
                    typeLogic = matchweek.points_total
                    break;
                case "weekly_points":
                    typeLogic = matchweek.game_week_points
                    break
                case "team_value":
                    typeLogic = matchweek.team_value
                    break
                case "bench_points":
                    typeLogic = matchweek.bench_points
                    benchLogic = typeLogic > AllOfTheAverages[player.matches.indexOf(matchweek)] ? 
                        "bad" 
                        : 
                        "good"
                    break
                default:
                    typeLogic = matchweek.points_total
            }

            const ratingLogic = dataType !== "bench_points" ? 
                TableCellType (
                    typeLogic, 
                    AllOfTheAverages[player.matches.indexOf(matchweek)]
                )
                : benchLogic
            
            // Returns cell and color of cell based on weekly performance and type
            return (
                <TablePlayersCell
                    key={index}
                    type={dataType}
                    value={typeLogic}
                    rating={ratingLogic}
                />
            )
        })

        // If total of current player is over the average, returns "good" or else it returns bad
        const TotalRatingLogic = TableCellType(player.points_total, TotalsAverage)
        
        return (
            <TablePlayersRow
                key={index}
                type={props.type}
                rank={FplData.indexOf(player) + 1}
                player_name={player.player_name}
                game_weeks={PlayersWeek}
                total_rating={TotalRatingLogic}
                total_points={player.points_total}
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
            total_averages={TotalsAverage.toFixed(1)}
        />
    )

    return (
        <div className="table-container">
            <SiteRender data={SiteFetch} component={TableLogic} />
        </div>
    )

}

export default PointsTable