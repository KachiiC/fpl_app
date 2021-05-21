import React from 'react'
// COMPONENTS
import Table from 'react-bootstrap/Table'
// COMPONENTS
import TableHeaders from './TableHeaders'
import TableRows from './TableRows'

const DisplayTable = (props) => (
    <>
        <h2>{props.title}</h2>
        <Table responsive>
            <tbody>
                <TableHeaders 
                    total={props.total} 
                    game_weeks={props.data[0].matches}
                    type={props.type}
                />
                <TableRows 
                    type={props.type}
                    rows={props.rows}
                    averages={props.averages}
                    total_averages={props.total_averages}
                />
            </tbody>
        </Table>
    </>
)

export default DisplayTable