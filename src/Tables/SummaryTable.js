import React from 'react'
// COMPONENTS
import { Table } from 'antd'
// DATA 
import SummaryColumns from 'Data/SummaryColumns'

const SummaryTable = (props) => {

    const myData = props.data.map((player, index) => {
        player.rank = index + 1
        player.chips_used = player.chips.length
        player.value = `£${player.team_value/10}M`
        return player
    })

    const columns = SummaryColumns.map((column) => {
        if (!('title' in column)) {
            return column.title = column.dataIndex.split("_").join(" ").toUpperCase()
        }
        column.align = "center"

        return column
    })

    const paginationLogic = props.data.length <= 10 ? false : true
    
    return (
        <>
            <h1>Table</h1>
            <div className="w-80 m-auto site-overflow">
                <Table columns={columns} dataSource={myData}  pagination={paginationLogic}/>
            </div>
        </>
    )
}

export default SummaryTable