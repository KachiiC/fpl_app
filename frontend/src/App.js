import React, {useState} from 'react'
// CSS
import './App.css';
// Components
// Data
import TabsData from 'Data/TabsData'

const App = () => {

  const [currentTab, setCurrentTab] = useState(0)

  const displayTabs = TabsData.map((tab, index) => (
      <div key={index}
        className="single-tab" 
        onClick={() => setCurrentTab(TabsData.indexOf(tab))}
      >
        <h4>{tab.title}</h4>
      </div>
  ))


    return (
      <div className="App">
        <div className="component-container">
            <div className="tabs-row">
                {displayTabs}
            </div>
            <div className="display-content">
                {TabsData[currentTab].content} 
            </div>
        </div>
      </div>
    )

}

export default App;
