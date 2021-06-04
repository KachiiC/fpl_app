const SummaryColumns = [
    {
        dataIndex: 'rank',
        // fixed: "left",
        width: 100,
        sorter: {
            compare: (a, b) => a.rank - b.rank,
        }
    },
    {
        title: "PLAYER",
        dataIndex: 'player_name',
        fixed: "left",
        width: 100,
    },
    {
        dataIndex: "points_total",
        sorter: {
            compare: (a, b) => a.points_total - b.points_total,
        }
    },
    {
        title: "LAST GW",
        dataIndex: "last_gameweek_points"
    },
    {
        dataIndex: "transfers_total",
        sorter: {
            compare: (a, b) => a.transfers_total - b.transfers_total,
        }
    },
    {
        title: "TRANSFER POINTS",
        dataIndex: "points_on_transfers",
        sorter: {
            compare: (a, b) => a.points_on_transfers - b.points_on_transfers,
        }
    },
    {
        dataIndex: "value"
    }
]

export default SummaryColumns