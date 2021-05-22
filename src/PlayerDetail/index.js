import React from 'react'
// import PlayerDetailTable from './PlayerDetailTable'
import AntdTabs from '../Components/AntdTabs'
import SumamryTable from './DetailTables/SummaryTable'


const PlayerDetail = (props) => {

    const pageContent = [
        {
            title: "Summary",
            content: <SumamryTable title="Summary" data={props.data}/>
        },
        {
            title: "Detailed",
            content: "content 2"
        },
        {
            title: "Chips",
            content: "content 3"
        }  
    ]

    return (
        <>
            <h1>{props.name}</h1>
            <AntdTabs data={pageContent} />
        </>
    )
}

export default PlayerDetail 