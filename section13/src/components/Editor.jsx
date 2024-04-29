import '../assets/scss/Editor.scss'
import EmotionItem from './EmotionItem'
import Button from './Button'

const EmotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음"
  },
  {
    emotionId: 2,
    emotionName: "좋음"
  },
  {
    emotionId: 3,
    emotionName: "그럭저럭"
  },
  {
    emotionId: 4,
    emotionName: "나쁨"
  },
  {
    emotionId: 5,
    emotionName: "ㅗ"
  },
]

const Editor = () => {
  const emotionId = 1;

  return (
    <div className="editor">
      <section className="editor_date">
        <h4>오늘의 날짜</h4>
        <input type="date" />
      </section>
      <section className="editor_emotion">
        <h4>오늘의 감정</h4>
        <div className="editor_emotion_list">
          {EmotionList.map((item) => (
            <EmotionItem 
              key={item.emotionId} 
              {...item} 
              isSelected={item.emotionId === emotionId} 
            />
          ))}
        </div>
      </section>
      <section className="editor_con">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어땠나요?" />
      </section>
      <section className="editor_btn">
        <Button 
          text={"취소하기"}
        />
        <Button 
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  )
}

export default Editor