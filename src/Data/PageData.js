import React from 'react'
// Data
import PlayerListData from './PlayerListData'
// Tables
import PointsByWeekTable from 'Tables/PointsByWeekTable'
import TeamValueTable from 'Tables/TeamValueTable'
import PointsOnBenchTable from 'Tables/PointsOnBenchTable'
import GameWeekTransfers from 'Tables/GameWeekTransfers'
import PlayerDetailTest from 'PlayerDetail/PlayerDetailTest'


const PageData = [
    {
        title: "week by week",
        content: <PointsByWeekTable />
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
    },
    {
        title: "test",
        content: <PlayerDetailTest/>
    }
]


export default PageData