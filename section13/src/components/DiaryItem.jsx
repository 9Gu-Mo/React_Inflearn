import {getEmotionImage} from "../util/get-emotion-image"
import Button from "./Button"
import '../assets/scss/DiaryList.scss'

const DiaryItem = () => {
  const emotionId = 1;
  return (
    <div className="diary_item">
      <div className={`diary_item_img diary_item_img_${emotionId}`}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      <div className="diary_item_info">
        <div className="diary_item_info_date">
          {new Date().toLocaleDateString()}
        </div>
        <div className="diary_item_info_con">
          일기 컨텐츠
        </div>
      </div>
      <div className="diary_item_button">
        <Button text={"수정하기"} />
      </div>
    </div>
  )
}

export default DiaryItem