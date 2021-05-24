import React from 'react'
// CSS
import './MaterialUITable.css'
// Material UI Table
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
// My Components
import TableHeadings from './TableContents/TableHeadings';
import TableContents from './TableContents/TableContents';

const MaterialUITable = (props) => (

    <div className="w-90 m-auto">
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                {/* TABLE HEADINGS */}
                <TableHeadings 
                    data={props.data} 
                />
                {/* TABLE Contents */}
                <TableContents 
                    data={props.data} 
                />
            </Table>
        </TableContainer>
    </div>

)

export default MaterialUITable