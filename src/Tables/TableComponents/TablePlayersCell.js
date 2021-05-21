import React from 'react'

const TablePlayersCell = (props) => (

    <td className={`${props.rating}-week`}>
        {props.value}
    </td>
)

export default TablePlayersCell