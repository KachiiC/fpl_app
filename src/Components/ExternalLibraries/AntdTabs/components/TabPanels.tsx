import { Tabs } from 'antd';
import SingleTab from './SingleTab';

const TabPanels = (props: {data: any[]}) => {

    // PROPS
    const { TabPane } = Tabs;
    const { data } = props

    const diplaypanels = data.map(tab => {

        const {title, description, content, link } = tab

        return (
            <TabPane 
                key={title}
                tab={title} 
            >
                <SingleTab
                    title={title}
                    description={description}
                    content={content}
                    link={link}
                />
            </TabPane>
        )
    })

    return (
        <>{diplaypanels}</>
    )
}

export default TabPanels