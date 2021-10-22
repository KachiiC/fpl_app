// COMPONENTS
import Table from 'react-bootstrap/Table'
import TableHeaders from './TableHeaders'
import TableRows from './TableRows'

const DisplayTable = (props: any) => {

    const {
        averages,
        rows,
        title,
        total_averages,
        type,
    } = props

    return(
        <>
            <h2>{title}</h2>
            <Table responsive>
                <tbody>
                    <TableHeaders
                        game_weeks={props.data[0].matches}
                        type={type}
                    />
                    <TableRows
                        type={type}
                        rows={rows}
                        averages={averages}
                        total_averages={total_averages}
                    />
                </tbody>
            </Table>
        </>
    )
}

export default DisplayTable