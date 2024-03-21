import './App.scss'
import { useState, useRef } from 'react'
import Header from './components/Header'
import Editor from './components/Editor'
import List from './components/List'
import Modal from './components/Modal'

const mockData = [
  {
    id: 0,
    isDone: false,
    content: "React",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "빨래하기",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "노래 연습하기",
    date: new Date().getTime(),
  },
]

function App() {
  const [todos, setTodos] = useState(mockData);
  const [show, setShow] = useState(false);
  
  const idRef = useRef(3);

  const onCreate = (content) => {
    const newTodo = {
      id: idRef.current++,
      isDone: false,
      content: content,
      date: new Date().getTime()
    }

    // todos배열에 newTodo객체 추가
    // state(todos)값은 상태변화 함수(setTodos)에 의해서 수정되어야함
    setTodos([newTodo, ...todos])
  };

  const onUpdate = (targetId) => {
    setTodos(todos.map((todo)=>todo.id === targetId ? {...todo, isDone: !todo.isDone} : todo))
  }
  
  return (
    <div className='App'>
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onUpdate={onUpdate} />
      <button
        type='button'
        onClick={()=> {
          setShow(true);
        }}
      >modal open</button>
      <Modal show={show} setShow={setShow} />
    </div>
  )
}

export default App
