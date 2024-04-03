// 형제 요소에서는 데이터를 주고받을수 없음
import './App.css'
import Controller from './components/Controller'
import Viewer from './components/Viewer'
import Even from './components/Even'
import { useState, useEffect, useRef } from 'react'

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  // 초기값 false 설정은 아직 마운트가 시작되지 않았다는 의미
  const isMount = useRef(false);
  // useEffect(콜백함수, 배열)
  // 1. 마운트 : 시작
  useEffect(()=>{
    // deps(배열 = deps)가 빈 값일 경우 최초 실행 후 실행 안됨
    console.log("mount")
    console.log("-------------------------------------")
  }, [])

  // 2. 업데이트 : 변화, 리렌더링
  // deps 생략
  // 업데이트 되는 순간에 콜백함수 실행 하려면 useRef 훅 사용
  useEffect(()=>{
    if(!isMount.current) {
      isMount.current = true;
      return;
    }
    console.log("update")
    console.log("============================================")
  })

  // 3. 언마운트 : 끝
  const onClickButton = (value) => {
    setCount(count + value);
    console.log("count : " + count)
  }

  return (
    <div className='App'>
      <h1>Simple Counter</h1>
      <section>
        <input 
          value={input}
          onChange={(e)=>{
            setInput(e.target.value)
          }}
        />
      </section>
      <section>
        <Viewer 
          count={count}
        />
        {count % 2 === 0 ? <Even /> : null}
      </section>
      <section>
        <Controller 
          onClickButton={onClickButton} 
        />
      </section>
    </div>
  )
}

export default App
