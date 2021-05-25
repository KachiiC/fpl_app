// import react from 'react'
import { Card } from 'antd';
import SiteLabelRender from 'Tables/TableTools/SiteLabelRender';
import MaterialUiTable from 'Components/MaterialUiTable'

const DetailTables = (props) => {
    
    const { Meta } = Card;

    const tableData = props.data.matches.map((match) => {

        const matchCards = Object.keys(match).filter(match => match !== "content")

        const displayedContent = matchCards.map((card) => {

            const descriptionLogic = () => {
                if (match[card] === 0) {
                    return "0"
                }
                else if (card === "team_value") {
                    return `£${match[card]/ 10}M`
                }
                return match[card]
            }

            return (
                <Card className="site-span-3 w-90 player-summary-card">
                    <Meta title={`${ SiteLabelRender(card)}:`}
                        className="text-center"
                        description={descriptionLogic()}
                    />
                </Card>
            )
        })

        match.content = (
            <div className="site-grid-system">
                {displayedContent}
            </div>
        )

        return match
    })
    
    return (
        <>
            <h1>Detailed Table</h1>
            <MaterialUiTable data={tableData} />
        </>
    )
}

export default DetailTables