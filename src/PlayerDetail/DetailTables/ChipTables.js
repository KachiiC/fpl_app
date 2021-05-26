import React from 'react'
// COMPONENTS
import SiteLabelRender from 'Tables/TableTools/SiteLabelRender';
import AntdCard from 'Components/AntdCard';


const ChipTables = (props) => {

    const displayChips = props.data.map((chip) => {

        const descriptionLogic = (
            <div>
                <h6>Matchday: {chip.chip_matchday}</h6>
                <p>Date Used: {chip.chip_date}</p>
            </div>
        )

        return (
            <AntdCard 
                width={80}
                span={"4"}
                className="text-center"
                title={`${ SiteLabelRender(chip.chip_name)}`}
                description={descriptionLogic}
            />
        )
    })

    const filteredCards =  props.data.length === 5 ? "None" : 5 - props.data.length

    const summary_card = (
        <div>
            <h3>{filteredCards}</h3>
        </div>
    )

    return (
        <div className="site-grid-system detail-table">
            <AntdCard 
                width={80}
                span={4}
                title="Chips Remaining"
                description={summary_card}
            />
            {displayChips}
        </div>
    )
}

export default ChipTables