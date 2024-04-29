import {getEmotionImage} from "../util/get-emotion-image"
import Button from "./Button"
import '../assets/scss/DiaryList.scss'
import {useNavigate} from 'react-router-dom'

const DiaryItem = ({id, emotionId, createdDate, content}) => {
  const nav = useNavigate();

  return (
    <div className="diary_item">
      <div 
        className={`diary_item_img diary_item_img_${emotionId}`}
        onClick={()=>nav(`diary/${id}`)}
      >
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div 
        className="diary_item_info"
        onClick={()=>nav(`diary/${id}`)}
      >
        <div className="diary_item_info_date">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div className="diary_item_info_con">
          {content}
        </div>
      </div>
      <div className="diary_item_button">
        <Button 
          text={"수정하기"} 
          onClick={()=>nav(`/edit/${id}`)}
        />
      </div>
    </div>
  )
}

export default DiaryItem