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
import PageData from 'Data/PageData';
import PlayerPageData from 'Data/PlayerPageData'


const App = () => {
  
  const displayPages = PageData.map((page, index) => {
    const pageLink = page.title.split(" ").join("-")
    return (
      <Route path={`/fpl_app/${pageLink}`} key={index}>
        {page.content}
      </Route>
    )
  })

  const displayPlayerPages = PlayerPageData.map((page, index) => (
      <Route path={`/player/${page.name}`} key={index}>
        {page.content}
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
