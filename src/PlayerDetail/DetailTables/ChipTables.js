import React from 'react'
// COMPONENTS
import { Card } from 'antd';
import SiteLabelRender from 'Tables/TableTools/SiteLabelRender';


const ChipTables = (props) => {

    const { Meta } = Card;

    const displayChips = props.data.map((chip) => {

        const descriptionLogic = (
            <div>
                <h6>Matchday: {chip.chip_matchday}</h6>
                <p>Date Used: {chip.chip_date}</p>
            </div>
        )

        return (
            <Card className="site-span-4 w-80 player-summary-card">
                <Meta title={`${ SiteLabelRender(chip.chip_name)}:`}
                    className="text-center"
                    description={descriptionLogic}
                />
            </Card>
        )
    })

    const filteredCards =  props.data.length === 5 ? "none" : 5 - props.data.length

    const summary_card = (
        <div>
            <h3>{filteredCards}</h3>
        </div>
    )

    return (
        <div className="site-grid-system">
            <Card className="site-span-4 w-80 player-summary-card">
                <Meta title="Chips Remaining:"
                    className="text-center"
                    description={summary_card}
                />
            </Card>
            {displayChips}
        </div>
    )
}

export default ChipTables