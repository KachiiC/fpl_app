// CSS
import { Switch, Route } from "react-router-dom";
// DATA
import DisplayedPagesData from "Data/Main/Displayed/DisplayedPagesData"
import HiddenData from "Data/Main/Hidden/HiddenPages"
import { FooterPages } from "Data/Footer/FooterData"
// TOOLS
import { LinkRenderer, RoutesRender } from "Tools/RoutersRender"
import { SiteFetcher } from "Tools/SiteFetcherTool"
// PAGES
import Home from "../Pages/Home";

const PagesRouter = () => {
    // URL
    const FplLink = "https://kachiis-rest.herokuapp.com/api/fpl/league=401369"
    // FETCH LOGIC
    const fetch = SiteFetcher(FplLink)
    const responseData = fetch.response
    // PAGES DATA 
    const data = LinkRenderer(DisplayedPagesData(responseData, fetch))
    
    // ROUTES
    const DisplayedRoutes = RoutesRender(data)
    const HiddenRoutes = RoutesRender(HiddenData)
    const FooterRoutes = RoutesRender(FooterPages)

    HiddenRoutes.push(
        <Route key="home" path="/">
            <Home 
                fetch={fetch} 
                data={responseData}
            />
        </Route>
    )

    return (
        <Switch>
            {DisplayedRoutes}
            {HiddenRoutes}
            {FooterRoutes}
        </Switch>
    )
}

export default PagesRouter