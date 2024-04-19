import './App.css'
import HookExam from './components/HookExam'
import Register from './components/Register'
import Button from './components/Button'

function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2, 
    c: 3
  }

  return (
    <div>
      {/* <div>
        spread operator
        <Button {...buttonProps} />
        <Button text={"카페"} />
        <Button>
          children props(컴포넌트도 props로 전달 가능)
          <div>자식 요소</div>
        </Button>
      </div> */}
      <Register />
      {/* <HookExam /> */}
    </div>
  )
}

export default App
