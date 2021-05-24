import React, {Fragment} from 'react';
// Components
import TableBody from '@material-ui/core/TableBody';
import TableSingleRow from './TableSingleRow'


const TableContentRow = (props) => {

    // Takes Data and renders a single row for each
    const renderDataList = props.data.map((row, index) => {

        return (
            <TableSingleRow 
                key={index}
                index={index} 
                row={row}
                content={row.content}
            />
        )
    })

    return (
        <TableBody>
            <Fragment>    
                {renderDataList}
            </Fragment>
        </TableBody>  
    )
}


export default TableContentRow