import './App.css'
import { useRef, useState } from 'react'

function App() {
  const inpRef = useRef("");
  const [state, inpState] = useState("")

  const focus = () => {
    console.log(inpRef.current)
    if(state === "") {
      alert("값을 입력하세요.")
      inpRef.current.focus();
    } else {
      return;
    }
  }

  return (
    <>
      <input ref={inpRef} type="text" value={state} />
      <button type='button' onClick={focus}>로그인</button>
    </>
  )
}

export default App
