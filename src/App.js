import React from 'react'
// CSS
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'antd/dist/antd.css';
import './table.css'
// Components
import { BrowserRouter, Switch, Route } from "react-router-dom";
import SiteNavbar from './Components/SiteNavbar'
import InputTable from './Tables/InputTable';
// Data
import PageData from 'Data/PageData';
import PlayerPageData from 'Data/PlayerPageData'


const App = () => {
  
  const displayPages = PageData.map((page, index) => {
    const pageLink = page.title.split(" ").join("-")
    return (
      <Route path={`/fpl/${pageLink}`} key={index}>
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
              <InputTable />
            </Route>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )

}

export default App;
