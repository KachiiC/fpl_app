import React from 'react'
// Data
// Tables
import TeamValueTable from 'Tables/TeamValueTable'
import PointsOnBenchTable from 'Tables/PointsOnBenchTable'
import PointsOnTransfers from 'Tables/PointsOnTransfers'
import InputTable from 'Tables/InputTable'


const PageData = [
    {
        title: "week by week",
        content: <InputTable data="points_total"/>
    },
    {
        title: "team value",
        content: <TeamValueTable />
    },
    {
        title: "bench points",
        content: <PointsOnBenchTable />
    },
    {
        title: "points on transfers",
        content: <PointsOnTransfers />
    }
]


export default PageData