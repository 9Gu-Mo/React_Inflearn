import { useState } from "react"

const DiaryEditor = () => {
  const [date, setDate] = useState(getTodayDate)
  const [con, setCon] = useState('')

  function getTodayDate() {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  }
  return (
    <div className="diary_editor">
      <div className="diary_editor_date">
        <strong>오늘의 날짜</strong>
        <input 
          type="date"
          value={date}
          onChange={(e)=>{
            setDate(e.target.value)
          }}
        />
      </div>
      <div className="diary_editor_emotion">
        <strong>오늘의 감정</strong>
        <div>
          <div className="emotion_item">
            <input type="radio" id="rdo01_1" name="rdo01" />
            <label htmlFor="rdo01_1">완전 좋음</label>
          </div>
          <div className="emotion_item">
            <input type="radio" id="rdo01_2" name="rdo01" />
            <label htmlFor="rdo01_2">좋음</label>
          </div>
          <div className="emotion_item">
            <input type="radio" id="rdo01_3" name="rdo01" />
            <label htmlFor="rdo01_3">그럭저럭</label>
          </div>
          <div className="emotion_item">
            <input type="radio" id="rdo01_4" name="rdo01" />
            <label htmlFor="rdo01_4">나쁨</label>
          </div>
          <div className="emotion_item">
            <input type="radio" id="rdo01_5" name="rdo01" />
            <label htmlFor="rdo01_5">끔찍함</label>
          </div>
        </div>
      </div>
      <div className="diary_editor_text">
        <strong>오늘의 일기</strong>
        <textarea 
          placeholder="오늘은 어땠나요?"
          onChange={(e)=>{
            setCon(e.target.value)
          }}
        />
      </div>
      <div className="diary_editor_btn">
        <a 
          href="/"
        >
          취소하기
        </a>
        <a 
          href="/"
          onClick={()=> {
            alert("작성이 완료됬습니다.")
          }}
        >
          작성완료
        </a>
      </div>
    </div>
  )
}

export default DiaryEditor