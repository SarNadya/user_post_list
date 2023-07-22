import React from "react";
import { Select } from 'antd';

const MySelect = ({options, defaultValue, value, onChange}) => {
    const handleChange = value => {
        onChange(value);
    };

    return (
        <div>
            <Select
                defaultValue={defaultValue}
                onChange={handleChange}
                style={{
                    width: 200,
                }}
                options={options}
            />
        </div>
    )
}

export default MySelect;