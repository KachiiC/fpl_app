import React from 'react'

const TableCaption = (props) => (
    // For Each Caption, it returns the info and "* =" based on index
    <>
        <small key={props.index}>
            {"*".repeat(props.index + 1)} = {props.info}
        </small>
        <br/>
    </>
)

export default TableCaption