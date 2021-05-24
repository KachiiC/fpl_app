import react from 'react'
import MaterialUiTable from 'Components/MaterialUiTable'

const DetailTables = (props) => {
    
    return (
        <>
            <h1>Detailed Table</h1>
            <MaterialUiTable data={props.data.matches} />
        </>
    )
}

export default DetailTables