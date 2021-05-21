import React from 'react'
// Data
// Tables
import TeamValueTable from 'Tables/TeamValueTable'
import PointsOnBenchTable from 'Tables/PointsOnBenchTable'
import PointsOnTransfers from 'Tables/PointsOnTransfers'
import PointsTable from 'Tables/PointsTable'

const PageData = [
    {
        title: "Weekly Totals",
        content: <PointsTable type="points_total" title="Weekly Totals"/>
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