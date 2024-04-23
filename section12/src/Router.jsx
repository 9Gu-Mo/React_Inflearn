import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Diary from './components/Diary'
import DiaryEditor from './components/DiaryEditor'
import DiaryDetail from './components/DiaryDetail'

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Diary />} />
        <Route path='/DiaryEditor' element={<DiaryEditor />} />
        <Route path='/DiaryDetail' element={<DiaryDetail />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Router