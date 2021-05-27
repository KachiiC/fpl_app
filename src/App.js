import React, { useEffect, useState } from 'react'
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
import PlayeDataExample from 'Data/PlayerListData'
import PlayerListData from 'Data/PlayerListData'
// import PlayerDetailTable from './PlayerDetail/PlayerDetailTable';
import PlayerDetail from './PlayerDetail';


const App = () => {

  const [playerListData, setplayerListData] = useState(PlayerListData)
  const [fplData, setFplData] = useState("")
  const [isLoading, setIsLoading] = useState(true)
  const [isDisplayable, setIsDisplayable] = useState(false)

  const submitLogic = e => {
    e.preventDefault()
    setFplData(document.getElementById("league_id").value)
  }

  useEffect(() => {
    fetch(`http://127.0.0.1:8000/api/fpl_league_search/${fplData}`)
    .then(response => response.json())
    .then(jsonData => {
        setIsLoading(false)
        setIsDisplayable(true)
        setplayerListData(jsonData)
      })
    .catch(err => {
      setIsDisplayable(false)
      console.log(err)
    })
  },[fplData])

  const PageData = [
    {
        title: "Weekly Totals",
        content: <PointsTable type="points_total" title="Weekly Totals" data={playerListData} />
    },
    {
        title: "Team value",
        content: <PointsTable type="team_value" title="Team Value" data={playerListData} />
    },
    {
        title: "Bench points",
        content: <PointsTable type="bench_points" title="Bench Points" data={playerListData} />
    },
    {
        title: "Points on transfers",
        content: <PointsTable type="transfer_points" title="Transfer Points" data={playerListData} />
    }
  ]

  const renderLogic = (content) => {
    if (playerListData !== PlayerListData) {
    return isLoading ? (
      <div>
          This is loading right
      </div>
    ):
      isDisplayable ? 
        content
      :(
        <div>Unable to display</div>
      )
    }
  }
   
  const displayPages = PageData.map((page, index) => {

    const pageLink = page.title.split(" ").join("-")

    return (
      <Route path={`/fpl_app/${pageLink}`} key={index}>
        {renderLogic(page.content)}
      </Route>
    )
  })

  const displayPlayerPages = playerListData.map((player, index) => (
      <Route path={`/player/${player.player_name}`} key={index}>
        <PlayerDetail data={player}/>
      </Route>
  ))

  return (
    <div className="App">
      <BrowserRouter>
        <SiteNavbar />
        <main>
          <form onSubmit={submitLogic}>
            <input type="text" id="league_id"/>
          </form>
          <Switch>
            {displayPages}
            {displayPlayerPages}
            <Route path="/">
              {renderLogic(<PointsTable data={playerListData} title="Weekly Points" type="weekly_points" />)}
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )

}

export default App;
