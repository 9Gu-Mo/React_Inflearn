import './App.css'
import { useState } from 'react'
import Register from './components/Register'
import HookExam from './components/HookExam'

const Bulb = ({light}) => {
  console.log(light)
  return <div>{light === 'on'?<h1 style={{backgroundColor:"orange"}}>ON</h1>:<h1 style={{backgroundColor:"gray"}}>OFF</h1>}</div>
}

function App() {
  const [count, setCount] = useState(0)
  const [light, setLight] = useState("off")

  return (
    <>
      {/* <div>
        <Bulb light={light} />
        <button 
          type='button' 
          style={{display:"block"}}
          onClick={()=> {
            setLight(light === 'off' ? 'on' : 'off')
          }}
        >
          {light === 'off' ? '켜기' : '끄기'}
        </button>
      </div>
      <div>
        <div>{count}</div>
        <button
          onClick={()=> {
            setCount(count+1)
          }}
        >+</button>
      </div> */}
      {/* <Register /> */}
      <HookExam />
    </>
  )
}

export default App
