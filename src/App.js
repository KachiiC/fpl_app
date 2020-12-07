import React from 'react'
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './table.css'
// Components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SiteNavbar from './Components/SiteNavbar'
import PointsScoredTable from './Tables/PointsScoredTable';
import PageData from 'Data/PageData';
import PlayerPageData from 'Data/PlayerPageData'
// Data


const App = () => {
  
  const displayPages = PageData.map((page, index) => {
    const pageLink = page.title.split(" ").join("-")
    return (
      <Route path={`/${pageLink}`} key={index}>
        {page.content}
      </Route>
    )
  })

  const displayPlayerPages = PlayerPageData.map((page, index) => (
      <Route path={`/${page.name}`} key={index}>
        {page.content}
      </Route>
  ))

  console.log(PlayerPageData)

  return (
    <div className="App">
      <BrowserRouter>
        <SiteNavbar />
        <main>
          <Switch>
            {displayPages}
            {displayPlayerPages}
            <Route path="/">
              <PointsScoredTable />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )

}

export default App;
