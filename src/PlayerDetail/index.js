import React from 'react'
// import PlayerDetailTable from './PlayerDetailTable'
import AntdTabs from '../Components/AntdTabs'
import DetailTables from './DetailTables/DetailTables'
import SumamryTable from './DetailTables/SummaryTable'


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
            content: "content 3"
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