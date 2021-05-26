// import react from 'react'
import SiteLabelRender from 'Tables/TableTools/SiteLabelRender';
import MaterialUiTable from 'Components/MaterialUiTable'
import AntdCard from 'Components/AntdCard';

const DetailTables = (props) => {

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
                <AntdCard 
                    className="text-center"
                    title={`${ SiteLabelRender(card)}`}
                    description={descriptionLogic()}
                />
            )
        })

        match.content = (
            <div className="site-grid-system detail-table">
                {displayedContent}
            </div>
        )

        return match
    })
    
    return <MaterialUiTable data={tableData} />

}

export default DetailTables