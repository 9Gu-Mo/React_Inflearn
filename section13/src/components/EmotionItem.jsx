import '../assets/scss/Editor.scss'
import {getEmotionImage} from '../util/get-emotion-image'

const EmotionItem = ({emotionId, emotionName, isSelected}) => {
  return (
    <div className={`editor_emotion_item ${isSelected ? `editor_emotion_item_on_${emotionId}` : ""}`}>
      <img className="editor_emotion_item_img" src={getEmotionImage(emotionId)}/>
      <div className="editor_emotion_item_name">
        {emotionName}
      </div>
    </div>
  )
}

export default EmotionItem