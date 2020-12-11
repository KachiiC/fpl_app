import React from 'react'
import {Table as BootstrapTable} from 'react-bootstrap'
import {Table} from 'antd'

const PlayerDetailTest = (props) => {

    const Data = [
        {
            "player_id": 2341747,
            "gameweek": 1,
            "game_week_points": 60,
            "points_total": 60,
            "team_value": 1000,
            "game_week_transfers": 0,
            "game_week_transfers_cost": 0,
            "bench_points": 6
        },
        {
            "player_id": 2341747,
            "gameweek": 2,
            "game_week_points": 79,
            "points_total": 139,
            "team_value": 1000,
            "game_week_transfers": 1,
            "game_week_transfers_cost": 0,
            "bench_points": 3
        },
        {
            "player_id": 2341747,
            "gameweek": 3,
            "game_week_points": 44,
            "points_total": 179,
            "team_value": 1005,
            "game_week_transfers": 2,
            "game_week_transfers_cost": 4,
            "bench_points": 2
        }
    ]

    const columnTitles = [
        "gameweek",
        "game_week_points",
        "points_total",
        "team_value",
        "game_week_transfers",
        "game_week_transfers_cost",
        "bench_points"
    ]

    const playerColumns = columnTitles.map((columnTitle) => {

        return {
            title: columnTitle,
            dataIndex: columnTitle,
            sorter: (a, b) => a.columnTitle - b.columnTitle,
        }
    })

    return (
        <div className="table-container"> 
            <BootstrapTable responsive>
                <Table 
                    columns={playerColumns} 
                    className="table" 
                    pagination={false}
                    data={Data}
                /> 
            </BootstrapTable>
        </div>
    )
}

export default PlayerDetailTest