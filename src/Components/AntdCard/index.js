import React from 'react'
// CSS

// COMPONENTS
import { Card } from 'antd';

const AntdCard = (props) => {

    const { Meta } = Card;

    const spanLogic = props.span ? props.span : 3
    const widthLogic = props.width ? props.width: 90

    return (
        <Card className={`site-span-${spanLogic} w-${widthLogic} player-summary-card`}>
            <Meta title={`${props.title}:`}
                description={props.description}
            />
        </Card>
    )
}

export default AntdCard