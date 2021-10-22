const SummaryColumns = [
    {
        dataIndex: 'rank',
        // fixed: "left",
        width: 100,
        sorter: {
            compare: (a: { rank: number }, b: { rank: number }) => a.rank - b.rank,
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
            compare: (a: { points_total: number }, b: { points_total: number }) => a.points_total - b.points_total,
        }
    },
    {
        title: "LAST GW",
        dataIndex: "last_gameweek_points"
    },
    {
        dataIndex: "transfers_total",
        sorter: {
            compare: (a: { transfers_total: number }, b: { transfers_total: number }) => a.transfers_total - b.transfers_total,
        }
    },
    {
        title: "TRANSFER POINTS",
        dataIndex: "transfers_cost",
        sorter: {
            compare: (a: { transfers_cost: number }, b: { transfers_cost: number }) => a.transfers_cost - b.transfers_cost,
        }
    },
    {
        dataIndex: "value"
    }
]

export default SummaryColumns