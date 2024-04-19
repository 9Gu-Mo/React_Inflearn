import './Editor.scss'
import { useState, useRef } from 'react'

const Editor = ({onCreate}) => {
    const [content, setContent] = useState('');
    const contentRef = useRef()

    const onChangeContent = (e) => {
        setContent(e.target.value);
    }

    const onSubmit = () => {
        if(content === '') {
            contentRef.current.focus();
            return;
        }
        onCreate(content);
        setContent("");
    }

    const onKeyDown = (e) => {
        if(e.keyCode === 13) {
            onSubmit();
        }
    }
    return (
        <div className="editor">
            <input
                ref={contentRef}
                type="text" 
                placeholder="새로운 todo" 
                value={content}
                onChange={onChangeContent}
                onKeyDown={onKeyDown}
            />
            <button 
                type="button"
                onClick={onSubmit}
            >
                추가
            </button>
        </div>
    )
}

export default Editor