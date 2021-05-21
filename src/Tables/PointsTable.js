import React from 'react'
// Data
import PlayeDataExample from 'Data/PlayerListData'
import SiteFetcher from 'Components/SiteFetcher'
// Components
import DisplayTable from './TableComponents/DisplayTable'
import CircularProgress from '@material-ui/core/CircularProgress'
import TablePlayersRow from './TableComponents/TablePlayersRow'
import TablePlayersCell from './TableComponents/TablePlayersCell'
import TableCellType from './TableComponents/TableCellType'

const FplLink = "https://kachiis-rest.herokuapp.com/api/fpl_players_refresh"

const PointsTable = (props) => {

    // FPL FETCHING DATA
    const SiteFetch = SiteFetcher(FplLink, PlayeDataExample)
    //FPL Data
    const FplData = SiteFetch.response
    // Loading Logic
    const FplLoading = SiteFetch.isFetching

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
            if (dataType === "points_total" ) {
                AllOfThePointsScored.push(FplData[x].matches[y].points_total);
            } else {
                AllOfThePointsScored.push(FplData[x].matches[y].game_week_points);
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

    // Total of all average of all player during a parti
    const TotalsAverage = FplData.map((player) => {
        return player.points_total
    }).reduce((a, b) => a + b) / FplData.length
        
    const playerGameWeeks = FplData.map((player, index) => {
        
        const playersWeek = player.matches.map((matchweek, index) => {
            
            // Detirmines type of cell
            const typeLogic = dataType === "points_total" ? 
                matchweek.points_total 
                : 
                matchweek.game_week_points
            
            // Compares value with average of that gameweek
            const ratingLogic = TableCellType(
                typeLogic, 
                AllOfTheAverages[player.matches.indexOf(matchweek)]
            )
            
            // Returns cell and color of cell based on 
            return (
                <TablePlayersCell
                    key={index}
                    value={typeLogic}
                    rating={ratingLogic}
                />
            )
        })

        // If total of current player 
        const renderTotalMeasure = TableCellType(player.points_total, TotalsAverage)
        
        return (
            <TablePlayersRow
                key={index}
                type={props.type}
                rank={FplData.indexOf(player) + 1}
                player_name={player.player_name}
                game_weeks={playersWeek}
                total_rating={renderTotalMeasure}
                total_points={player.points_total}
            />
        )
    })
    
    const TableLogic = FplLoading ? 
            <CircularProgress />
        :(
            <DisplayTable
                title={props.title}
                data={FplData}
                type={props.type}
                rows={playerGameWeeks}
                averages={AllOfTheAverages}
                total_averages={TotalsAverage.toFixed(1)}
            />
        )
    
    return (
        <div className="table-container">
            {TableLogic}
        </div>
    )

}

export default PointsTable