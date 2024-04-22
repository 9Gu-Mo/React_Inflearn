/* eslint-disable react/prop-types */
import { memo } from 'react';
import './TodoItem.scss'

const TodoItem = ({
    id,
    isDone,
    content,
    date,
    onUpdate,
    onDelete}) => {
    const onChangeCheckbox = () => {
        onUpdate(id);
    }
    const onClickDelete = () => {
        onDelete(id)
    }
    return (
        <div className="TodoItem">
            <input 
                readOnly 
                type="checkbox" 
                checked={isDone}
                onChange={onChangeCheckbox}
            />
            <div className="content">{content}</div>
            <div className="date">{new Date(date).toLocaleDateString()}</div>
            <button
                onClick={onClickDelete}
            >삭제</button>
        </div>
    )
}

// 고차 컴포넌트(HOC) => memo
// export default memo(TodoItem, (prevProps, nextProps)=>{
//     // 반환값에 따라, props가 바뀌었는지 판단
//     // true => props가 바뀌지 않음 => 리렌더링 x
//     // false => props가 바뀜 => 리렌더링 o
//     if(prevProps.id !== nextProps.id) return false;
//     if(prevProps.isDone !== nextProps.isDone) return false;
//     if(prevProps.content !== nextProps.content) return false;
//     if(prevProps.date !== nextProps.date) return false;

//     return true;
// });

export default memo(TodoItem)