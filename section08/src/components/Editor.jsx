import './Editor.scss'
import { useState, useRef } from 'react'

const Editor = ({ onCreate }) => {

    const [content, setContent] = useState("")
    const contentRef = useRef();

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onKeyDown = (e) => {
        if(e.key === 'Enter') {
            onSubmit();
        }
    }
    
    const onSubmit = () => {
        if(content === "") {
            contentRef.current.focus();
            return;
        }
        onCreate(content)
        setContent("");
    }    

    return (
        <div className="editor">
            <input
                onKeyDown={onKeyDown}
                ref={contentRef}
                value={content}
                onChange={onChangeContent}
                type="text" 
                placeholder="새로운 todo" 
            />
            <button onClick={onSubmit} type="button">추가</button>
        </div>
    )
}

export default Editor