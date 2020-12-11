import React from 'react'
import PointsScoredTable from 'Tables/PointsScoredTable'
//
import WeekByWeekTable from 'Tables/WeekByWeekTable'
import PointsOnBenchTable from 'Tables/PointsOnBenchTable'
import TeamValueTable from 'Tables/TeamValueTable'
import GameWeekTransfersTable from '../Tables/GameWeekTransfers'
import PlayerDetailTest from 'PlayerDetail/PlayerDetailTest'

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
        title: "test",
        content: <PlayerDetailTest />
    }

]

export default TabsData