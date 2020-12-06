import React from 'react'
// Data
import PlayerListData from 'Data/PlayerListData'
// Tables
import WeekByWeekTable from 'Tables/WeekByWeekTable'
import PointsOnBenchTable from 'Tables/PointsOnBenchTable'
import TeamValueTable from 'Tables/TeamValueTable'
import GameWeekTransfers from 'Tables/GameWeekTransfers'
import PlayerDetailTable from 'PlayerDetail/PlayerDetailTable'

const PageData = [
    {
        title: "week by week",
        content: <WeekByWeekTable />
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
        title: "game week transfers",
        content: <GameWeekTransfers />
    }
]


export default PageData