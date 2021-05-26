import React from 'react'
// COMPONENTS
import AntdTabs from 'Components/AntdTabs'
import DetailTables from './DetailTables/DetailTables'
import SumamryTable from './DetailTables/SummaryTable'
import ChipsTable from './DetailTables/ChipTables'


const PlayerDetail = (props) => {

    const pageContent = [
        {
            title: "Summary",
            content: <SumamryTable title="Summary" data={props.data}/>
        },
        {
            title: "Detailed",
            content: <DetailTables title="Detailed Table" data={props.data} />
        },
        {
            title: "Chips",
            content: <ChipsTable data={props.data.chips} />
        }  
    ]

    return (
        <>
            <h2>{props.data.player_name}</h2>
            <h4>{props.data.team_name}</h4>
            <AntdTabs data={pageContent} />
        </>
    )
}

export default PlayerDetail 