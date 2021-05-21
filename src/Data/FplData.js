import SiteFetcher from 'Components/SiteFetcher'
// DATA
import PlayerListDataExample from 'Data/PlayerListData'

const FplLink = "https://kachiis-rest.herokuapp.com/api/fpl_players_refresh"

const FplData = () => {

    const FplFetch = SiteFetcher(FplLink,PlayerListDataExample)

    const responseData = FplFetch.response

    const responseLoading = FplFetch.isFetching

    const responseDisplay = FplFetch.isDisplayable

    return {
        responseData,
        responseLoading,
        responseDisplay
    }

}

export default FplData