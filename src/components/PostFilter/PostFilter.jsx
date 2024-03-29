import React from "react";
import MySelect from "../MySelect/MySelect";
import MyInput from "../MyInput/MyInput";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
                placeholder='Поиск'
            />
            <MySelect
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
                defaultValue='Сортировка'
                options={[
                    {value: 'title', label: 'По названию'},
                    {value: 'body', label: 'По описанию'},
                ]}
            />
        </div>
    )
}

export default PostFilter;