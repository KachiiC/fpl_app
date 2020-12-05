import React from 'react'
import PointsScoredTable from 'Tables/PointsScoredTable'
//
import WeekByWeekTable from 'Tables/WeekByWeekTable'
import PointsOnBenchTable from 'Tables/PointsOnBenchTable'
import TeamValueTable from 'Tables/TeamValueTable'
import GameWeekTransfersTable from '../Tables/GameWeekTransfers'
import PlayerDetail from 'PlayerDetail'

const TabsData = [
    {
        title: "Points Scored",
        content: <PointsScoredTable />
    },
    {
        title: "Week by Week",
        content: <WeekByWeekTable />
    },
    {
        title: "Points of Bench",
        content: <PointsOnBenchTable />
    },
    {
        title: "Team Value",
        content: <TeamValueTable />
    },
    {
        title: "Game Week Transfers",
        content: <GameWeekTransfersTable />
    },
    {
        title: "Player Detail",
        content: <PlayerDetail />
    }

]

export default TabsData