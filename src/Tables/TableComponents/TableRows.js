import React from 'react'

const TableRows = (props) => {

    // if it isn't points_total return a total some 
    const AverageTotals = () => {
        if (props.type !== "points_total") {
            return <td>{props.total_averages}</td>
        }
    }

    const AveragesLogic = props.averages.map((average, index) => {

        const typeLogic = props.type === "team_value" ? 
            `${(average /10).toFixed(1)}M`
            :
            average.toFixed(1)
        
        return (
            <td key={index}>
                {typeLogic}
            </td>
        )
    }
        )

    return (
        <>
            {props.rows}
            <tr>
                <td className="player-rank rank-name">-</td>
                <td className="player-name rank-name">Average</td>
                {AveragesLogic}
                {AverageTotals()}
            </tr>

        </>
    )
}

export default TableRows