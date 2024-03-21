import { useState } from 'react'
import './List.scss'
import TodoItem from './TodoItem'

const List = ({ todos, onUpdate }) => {
    const [search, setSearch] = useState("");

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search === '') {
            return todos;
        } 
        return todos.filter((todo)=>
            todo.content.toLowerCase().includes(search.toLowerCase())
        );
    }

    const filteredTodos = getFilteredData();
    return (
        <div className="list">
            <h4>Todo List ✨</h4>
            <input 
                type="search" 
                value={search} 
                placeholder="검색어를 입력하세요" 
                onChange={onChangeSearch}
            />
            <div className='todos_wrap'>
                {filteredTodos.map((todo)=>{
                    return <TodoItem key={todo.id} {...todo} onUpdate={onUpdate}/>
                })}
            </div>
        </div>
    )
}

export default List