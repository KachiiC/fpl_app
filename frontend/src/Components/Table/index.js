import React from 'react'
// Data
import PlayerListData from 'Data/PlayerListData';
// Components
import Table from 'Components/Table'

const FPLTable = () => {

    const tableHeadings = ["players"] 
    const gameWeeks = PlayerListData[0].matches.map((match) => tableHeadings.push(match.game_week))
    const gamesSoFar = PlayerListData[0].matches.length
    const displayHeadings = tableHeadings.map((heading) => (
        <th>{heading}</th>
        )
    )

    const playersList = PlayerListData.map((player) => (
            <>
                <tr>{player.player_name}</tr>
            </>
        )
    )

    // const displayWeeks = () => {
    //     for 

    // }


    return (
        <div>
            <table>   
                {displayHeadings}
                {playersList}
            </table>
        </div>
    )
}

export default FPLTable