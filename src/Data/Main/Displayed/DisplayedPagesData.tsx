// TOOLS
import FplTable from "Components/PageComponents/FplTable"
import { LinkRenderer } from "Tools/RoutersRender"
import { SiteRender } from "Tools/SiteFetcherTool"

export const DataObjects = [
    {
        title: "Weekly Points",
        type: "game_week_points"
    },
    {
        title: "Weekly Totals",
        type: "points_total"
    },
    {
        title: "Team Value",
        type: "team_value"
    },
    {
        title: "Bench Points",
        type: "bench_points"
    },
    {
        title: "Transfer Points",
        type: "transfers_cost",
    }
]

// Returns the data as links before export
LinkRenderer(DataObjects)

const DisplayedPagesData = (input_data: any[], fetch: any) => {

    return DataObjects.map(data => {

        const table = <FplTable type={data.type} title={data.title} data={input_data} />

        return {
            title: data.title,
            content: <SiteRender fetch={fetch} component={table} />
        }
    })
}


export default DisplayedPagesData