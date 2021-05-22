import React from 'react'
import { Descriptions } from 'antd'
import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const SumamryTable = (props) => {

    const { Meta } = Card;

    const summaryHeadings = {
        player_id:  props.data.player_id,
        points_total: props.data.points_total,
        transfers_total: props.data.transfers_total,
        chips: props.data.chips.length
    }

    const labelsList = Object.keys(summaryHeadings)

    const displayDecription = labelsList.map((label) => {

        const labelName = label.split("_").join(" ").toUpperCase()

        return (
            <Card 
                cover={<img alt="example"src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"/>}
                actions={[
                <SettingOutlined key="setting" />,
                <EditOutlined key="edit" />,
                <EllipsisOutlined key="ellipsis" />,
                ]}
                className="site-span-3 w-80 m-auto"
            >
                <Meta title="Card title"
                    description="This is the description"
                    avatar={
                        <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
                    }
                />
            </Card>
        )
    })

    return (
        <div className="w-80 m-auto site-grid-system">
            {displayDecription}
        </div>
    )
}

export default SumamryTable