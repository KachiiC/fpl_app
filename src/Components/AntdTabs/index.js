import React from 'react'
import { Tabs } from 'antd';

const { TabPane } = Tabs;

const AntdTabs = (props) => {

    const displayTabs = props.data.map((tab, index) => (
        <TabPane tab={tab.title} key={index}>
            {tab.content}
        </TabPane>
    ))

    return (
        <Tabs type="card" 
            size="large" 
            centered={true}
        >
            {displayTabs}
        </Tabs>
    )
}
export default AntdTabs