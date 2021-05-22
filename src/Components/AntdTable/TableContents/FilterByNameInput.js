import React, {useState} from 'react'
import { Input } from 'antd';

const FilterByNameInput = (props) => {
    
    const [dataSource, setDataSource] = useState(props.data);
    const [value, setValue] = useState('');

    const columnFilter = (
        <Input
            placeholder={props.search_input}
            value={value}
            onChange={e => {
                setValue(e.target.value);
                const filteredData = props.data.filter(entry =>
                    entry.name.includes(e.target.value)
            );
            setDataSource(filteredData);
          }}
        />
    )

    return {
        dataSource,
        columnFilter
    }

}

export default FilterByNameInput