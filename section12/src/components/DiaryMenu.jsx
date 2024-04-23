const DiaryMenu = () => {
  return (
    <div className="diary_menu">
      <select>
        <option value="latest">최신순</option>
        <option value="old">오래된 순</option>
      </select>
      <a href="/DiaryEditor">새 일기 쓰기</a>
    </div>
  )
}

export default DiaryMenu