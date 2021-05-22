import React from 'react'

const TablePlayersCell = (props) => {
    
    const valueLogic = props.type === "team_value" ? `${(props.value /10).toFixed(1)}M` : props.value

    return (

        <td className={`${props.rating}-week ${props.table_style}`}>
            {valueLogic}
        </td>
    )
}
export default TablePlayersCell