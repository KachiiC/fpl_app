import React from 'react'
// Components
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Collapse from '@material-ui/core/Collapse';

// Takes "content" as a child property
// 
// Example: 
//  <CollapseSectionDropdown> 
//      "This Content"
//  </CollapseSectionDropdown>

const CollapseSectionDropdown = (props) => ( 
    <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={props.open} timeout="auto" unmountOnExit>
                <div className="material-ui-content-container">
                    {props.content}
                </div>
            </Collapse>
        </TableCell>
    </TableRow>
)

export default CollapseSectionDropdown
