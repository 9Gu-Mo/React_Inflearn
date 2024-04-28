import Button from './Button'
import '../assets/scss/DiaryList.scss'
import DiaryItem from './DiaryItem'

const DiaryList = () => {
  return (
    <div className="diary_list">
      <div className="diary_list_menu">
        <select>
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button text={"새 일기 쓰기"} type={"POSITIVE"} />
      </div>
      <div className="diary_list_wrap">
        <DiaryItem />
      </div>
    </div>
  )
}

export default DiaryList