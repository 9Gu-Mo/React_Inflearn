import '../assets/scss/Editor.scss'
import EmotionItem from './EmotionItem'
import Button from './Button'
import {useState} from 'react';
import { useNavigate } from 'react-router-dom'

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

// 날짜 형식 반환 함수
const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if(month < 10) {
    month = `0${month}`;
  }
  if(date < 10) {
    date = `0${date}`;
  }

  return `${year}-${month}-${date}`
}

const Editor = ({onSubmit}) => {
  const [input, setInput] = useState({
    createdDate : new Date(),
    emotionId : 3,
    content : "",
  });
  const onChangeInput = (e) => {
    console.log(e.target.name) // 어떤 요소에 입력이 들어온건지
    console.log(e.target.value) // 입력된 값이 무엇인지

    let name = e.target.name;
    let value = e.target.value;

    if(name === 'createdDate') {
      value = new Date(value)
    }
    
    setInput({
      ...input,
      [name] : value,
    })
  }

  const onClickSubmitButton = () => {
    onSubmit(input);
  }

  const nav = useNavigate();

  return (
    <div className="editor">
      <section className="editor_date">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          type="date" 
          value={getStringedDate(input.createdDate)}
        />
      </section>
      <section className="editor_emotion">
        <h4>오늘의 감정</h4>
        <div className="editor_emotion_list">
          {EmotionList.map((item) => (
            <EmotionItem 
              key={item.emotionId} 
              {...item} 
              isSelected={item.emotionId === input.emotionId}
              onClick={()=>onChangeInput({
                target : {
                  name : "emotionId",
                  value : item.emotionId,
                },
              })} 
            />
          ))}
        </div>
      </section>
      <section className="editor_con">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          placeholder="오늘은 어땠나요?"
          value={input.content}
          onChange={onChangeInput}
        />
      </section>
      <section className="editor_btn">
        <Button 
          text={"취소하기"}
          onClick={()=>nav(-1)}
        />
        <Button 
          text={"작성완료"}
          type={"POSITIVE"}
          onClick={onClickSubmitButton}
        />
      </section>
    </div>
  )
}

export default Editor