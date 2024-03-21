import './TodoItem.scss'
const TodoItem = ({id, isDone, content, date, onUpdate}) => {

    const onChangeCheckbox = () => {
        onUpdate(id);
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
            <button>삭제</button>
        </div>
    )
}

export default TodoItem