import React from "react"
//Components
import { Table } from 'antd';
import TableCaption from "./TableContents/TableCaption";

const AntdTable = (props) => {

    const table_info = () => {
        if (props.captions) {
            return props.captions.map((info, index) => (   
                <TableCaption 
                    index={index} 
                    info={info} 
                />
            ))
        }
    }

    return (
        <div className="w-90 m-auto">
            <h4>{props.title}</h4> 
            <Table 
                columns={props.columns} 
                dataSource={props.data} 
                pagination={props.pagination}
            />
            {table_info()}
        </div>
    )
}

export default AntdTable;