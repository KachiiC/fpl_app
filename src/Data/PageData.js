import React from 'react'
// Data
// Tables
import PointsTable from 'Tables/PointsTable'

const PageData = [
    {
        title: "Weekly Totals",
        content: <PointsTable type="points_total" title="Weekly Totals"/>
    },
    {
        title: "Team value",
        content: <PointsTable type="team_value" title="Team Value" />
    },
    {
        title: "Bench points",
        content: <PointsTable type="bench_points" title="Bench Points" />
    },
    {
        title: "Points on transfers",
        content: <PointsTable type="transfer_points" title="Transfer Points" />
    }
]


export default PageData