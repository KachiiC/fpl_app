import React from 'react'
import { Card } from 'antd';
import SiteLabelRender from 'Tables/TableTools/SiteLabelRender';
// CSS
import 'PlayerDetail/PlayerDetail.css'

const SumamryTable = (props) => {

    const { Meta } = Card;

    const summaryHeadings = {
        player_id:  props.data.player_id,
        total_points: props.data.points_total,
        team_value: props.data.team_value / 10,
        total_transfers: props.data.transfers_total,
    }

    const labelsList = Object.keys(summaryHeadings)

    const displayDecription = labelsList.map((label) => {

        var labelName, labelDescription

        switch(label) {
            case "total_transfers":
                labelName = "TRANSFERS"
                labelDescription = (
                    <div className="labels-description-box">
                        {/* <p><b>Total Transfers: </b>{props.data.transfers_total}</p> */}
                        <h5>{props.data.transfers_total}</h5>
                        <p><b>Points Spent On Transfers: </b>{props.data.points_on_transfers}</p>
                    </div>
                )
                break
            case "total_points":
                labelName = "TOTAL POINTS"
                labelDescription = (
                    <>
                        <h5>{summaryHeadings[label]}</h5>
                        <p><b>Last GW ({props.data.current_gameweek})</b>: {props.data.last_gameweek_points} points</p>
                    </>
                    
                )
                break
            case "team_value":
                labelName = "TEAM VALUE"
                labelDescription = <h4>£{summaryHeadings[label]}M</h4>
                break
            default:
                labelName = SiteLabelRender(label)
                labelDescription = <h4>{summaryHeadings[label]}</h4>
        }
 
        return (
            <Card className="site-span-3 w-90 player-summary-card">
                <Meta title={`${labelName}:`}
                    description={labelDescription}
                    // avatar={label_avatar}
                />
            </Card>
        )
    })

    return (
        <div className="summary-table">
            <div className="w-90 m-auto site-grid-system">
                {displayDecription}
            </div>
        </div>
    )
}

export default SumamryTable