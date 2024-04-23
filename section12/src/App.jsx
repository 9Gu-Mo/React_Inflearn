import './App.scss'
import './assets/scss/base/reset.scss'
import Diary from './components/Diary'
import DiaryEditor from './components/DiaryEditor'
import Header from './layouts/Header'

function App() {

  return (
    <div className='App'>
      <Header />
      <Diary />
      <DiaryEditor />
    </div>
  )
}

export default App
