// COMPONENTS
import FplTable from "Components/PageComponents/FplTable"
// TOOLS
import { SiteRender } from "Tools/SiteFetcherTool"

const Home = (props: any) => {

    const HomeTable = (
        <FplTable
            title="Game week points"
            type="game_week_points"
            data={props.data} 
        />
    )

    return (
        <SiteRender
        component={HomeTable}
        fetch={props.fetch}
    />
    )
}

export default Home