import React from 'react'
// CSS
import './App.css';
import './table.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
// Components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SiteNavbar from './Components/SiteNavbar'
import PointsTable from './Tables/PointsTable';
// Data
// import PageData from 'Data/PageData';
// import PageData, {playerListData, SiteFetch} from 'Data/PageData'
import SiteFetcher from 'Components/SiteFetcher'
import SiteRender from 'Components/SiteRender'
import PlayerDetail from './PlayerDetail';
import PlayerDataExample from 'Data/PlayerListData'
import SummaryTable from './Tables/SummaryTable';


const FplLink = "https://kachiis-rest.herokuapp.com/api/fpl_players_refresh"

const App = () => {

  const SiteFetch = SiteFetcher(FplLink, PlayerDataExample)
  const responseData = SiteFetch.response

  const PageData = [
    {
      title: "Weekly Points",
      content: <PointsTable data={responseData} title="Weekly Points" type="weekly_points" />

    },
    {
        title: "Weekly Totals",
        content: <PointsTable type="points_total" title="Weekly Totals" data={responseData} />
    },
    {
        title: "Team value",
        content: <PointsTable type="team_value" title="Team Value" data={responseData} />
    },
    {
        title: "Bench points",
        content: <PointsTable type="bench_points" title="Bench Points" data={responseData} />
    },
    {
        title: "Points on transfers",
        content: <PointsTable type="transfer_points" title="Transfer Points" data={responseData} />
    }
  ]
   
  const displayPages = PageData.map((page, index) => {

    const pageLink = page.title.split(" ").join("-")

    return (
      <Route path={`/fpl_app/${pageLink}`} key={index}>
        <SiteRender
          component={page.content}
          data={SiteFetch}
        />
      </Route>
    )
  })

  const displayPlayerPages = responseData.map((player, index) => (
      <Route path={`/fpl_app/player/${player.player_name}`} key={index}>
        <SiteRender
          component={<PlayerDetail data={player}/>}
          data={SiteFetch}
        />
      </Route>
  ))

  return (
    <div className="App">
      <BrowserRouter>
        <SiteNavbar data={responseData}/>
        <main>
          <Switch>
            {displayPages}
            {displayPlayerPages}
            <Route path="/">
              <SiteRender
                component={<SummaryTable data={responseData}/>}
                data={SiteFetch}
              />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )

}

export default App;
