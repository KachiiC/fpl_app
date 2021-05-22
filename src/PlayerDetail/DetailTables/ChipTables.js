import React from 'react'
// COMPONENTS
import Table from 'react-bootstrap/Table'

const ChipTables = (props) => {

    return (
        <div className="second-table-container">
            <h1>Chips Played</h1>
            <Table responsive>
                <tbody>
                    <tr>
                        <th>Game Week</th>
                        <th>Chip Played</th>
                        <th>Date</th>
                    </tr>
                    {props.chips}
                </tbody>
            </Table>
        </div>
    )
}

export default ChipTables