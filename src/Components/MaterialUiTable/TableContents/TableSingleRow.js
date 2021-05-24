import React, { useState } from 'react';
// Components
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import TableCollapsableRow from './TableCollapsableRow';


const TableSingleRow = (props) => {
    
    const rowContent = Object.keys(props.row).filter(heading => heading !== "content")

    // By default rows are closed and content is hidden
    const [open, setOpen] = useState(false)

    // When clicked open Logic with toggle 
    const openLogic = () => setOpen(!open)

    // Returns a table cell for each value in object until cropped
    const displayedTableCells = rowContent.map((attribute, index) => (
            <TableCell align="center" key={index}>
                {props.row[attribute]}
            </TableCell>
        )
    )

    const arrowLogic = open ? 
        <KeyboardArrowDownIcon /> 
        : 
        <ChevronRightIcon />


    const dropDownLogic = () => {
        if (props.content) {
            return (
                <IconButton 
                    key={props.index} 
                    aria-label="expand row" 
                    size="small" 
                    onClick={openLogic}
                >
                    {arrowLogic}
                </IconButton>
            )
        }
    }

    return (
        <>
            <TableRow>
                <TableCell>
                    {dropDownLogic()}
                </TableCell>
                {displayedTableCells}
            </TableRow>
            <TableCollapsableRow
                open={open}
                content={props.content}
            />
        </>
    )

}

export default TableSingleRow