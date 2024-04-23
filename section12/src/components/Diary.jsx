import '../assets/scss/components/Diary.scss'
import DiaryList from './DiaryList'
import DiaryMenu from './DiaryMenu'

const Diary = () => {
  return (
    <div className="diary">
      <DiaryMenu />
      <DiaryList />
    </div>
  )
}

export default Diary