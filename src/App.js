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
import PageData from 'Data/PageData';
import PlayerListData from 'Data/PlayerListData'
import PlayerDetailTable from './PlayerDetail/PlayerDetailTable';


const App = () => {

  const [playerListData, setplayerListData] = useState(PlayerListData)

  useEffect(() => {
    fetch("https://kachiis-rest.herokuapp.com/api/fpl_players/")
    .then(response => response.json())
    .then(playerDataFromServer => {
          setplayerListData(playerDataFromServer)
        })
        .catch(err => console.log(err))
    },[])
  
  const displayPages = PageData.map((page, index) => {
    const pageLink = page.title.split(" ").join("-")
    return (
      <Route path={`/fpl_app/${pageLink}`} key={index}>
        {page.content}
      </Route>
    )
  })

  const displayPlayerPages = playerListData.map((player, index) => (
      <Route path={`/player/${player.player_name}`} key={index}>
        <PlayerDetailTable data={player}/>
      </Route>
  ))

  return (
    <div className="App">
      <BrowserRouter>
        <SiteNavbar />
        <main>
          <Switch>
            {displayPages}
            {displayPlayerPages}
            <Route path="/fpl_app">
              <PointsTable title="Weekly Points"/>
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )

}

export default App;
