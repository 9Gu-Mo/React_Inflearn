/* eslint-disable react/prop-types */
import './List.scss'
import TodoItem from './TodoItem'
import { useState, useMemo, useContext } from 'react'
import { TodoStateContext } from '../App'

const List = () => {
    const todos = useContext(TodoStateContext)
    const [search, setSearch] = useState('');

    const onChangeSearch = (e) => {
        setSearch(e.target.value);
    }

    const getFilteredData = () => {
        if(search === '') {
            return todos;
        }
        return todos.filter((todo)=>todo.content.toLowerCase().includes(search.toLowerCase()))
    }

    const filteredTodos = getFilteredData();

    // const getAnalyzedData = () => {
    //     console.log("getAnalsxzjcvk")
    //     const totalCount = todos.length;
    //     const doneCount = todos.filter((todo)=>todo.isDone).length;
    //     const notDoneCount = totalCount - doneCount;

    //     return {
    //         totalCount,
    //         doneCount,
    //         notDoneCount
    //     }
    // }

    const {totalCount, doneCount, notDoneCount} = useMemo(()=>{
        console.log("getAnalsxzjcvk")
        const totalCount = todos.length;
        const doneCount = todos.filter((todo)=>todo.isDone).length;
        const notDoneCount = totalCount - doneCount;

        return {
            totalCount,
            doneCount,
            notDoneCount
        }
    }, [todos])

    // const {totalCount, doneCount, notDoneCount} = getAnalyzedData();

    return (
        <div className="list">
            <h4>Todo List ✨</h4>
            <div>total: {totalCount}</div>
            <div>done: {doneCount}</div>
            <div>notDone: {notDoneCount}</div>
            <input
                value={search}
                type="search" 
                placeholder="검색어를 입력하세요" 
                onChange={onChangeSearch}
            />
            <div className='todos_wrap'>
                {filteredTodos.map((todo)=>{
                    return (
                        <TodoItem key={todo.id} {...todo} />
                    )
                })}
            </div>
        </div>
    )
}

export default List