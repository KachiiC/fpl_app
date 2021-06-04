import React, { useState } from 'react'
// Components
import TableCell from '@material-ui/core/TableCell'
import TableRow from '@material-ui/core/TableRow'
import TableCollapsableRow from './TableCollapsableRow'
// ICONS
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronCircleDown, faChevronCircleRight } from '@fortawesome/free-solid-svg-icons'


const TableSingleRow = (props) => {
    
    const rowContent = Object.keys(props.row).filter(heading => heading !== "content").slice(0,3)

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

    const arrowLogic = !open ? faChevronCircleRight : faChevronCircleDown 

    const dropDownLogic = () => {
        if (props.content) {
            return (
                <FontAwesomeIcon 
                    icon={arrowLogic}
                    size="lg" 
                    onClick={openLogic}
                    className="cursor-pointer"
                />
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