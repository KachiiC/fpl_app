import React from 'react'
import SiteLabelRender from 'Tables/TableTools/SiteLabelRender';
// CSS
import 'PlayerDetail/PlayerDetail.css'
import AntdCard from 'Components/AntdCard';

const SumamryTable = (props) => {

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
            <AntdCard title={`${labelName}:`}
                description={labelDescription}
            />
        )
    })

    return (
        <div className="w-90 m-auto site-grid-system detail-table">
            {displayDecription}
        </div>
    )
}

export default SumamryTable