// App.jsx 코드 백업용

import {Routes, Route, Link, useNavigate} from 'react-router-dom';

import Home from "./pages/Home"
import Diary from "./pages/Diary"
import New from "./pages/New"
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

import Header from "./components/Header";
import Button from "./components/Button";

// import { getEmotionImage } from "./util/get-emotion-image";

function App_backup() {
  // 1. '/' => 모든 일기를 조회하는 페이지(메인)
  // 2. '/new' => 새로운 일기를 작성하는 페이지(New)
  // 3. '/diary' => 작성한 일기를 조회하는 페이지(Diary)

  // const nav = useNavigate();

  // const onClickButton = () => {
  //   nav('/new')
  // }
  
  return (
    <div>
      <Header 
        title={"Header"}
        leftChild={<Button text={"left"} />}
        rightChild={<Button text={"right"} />}
      />
      <Button 
        text={"버튼테스트"}
        onClick={()=>{
          alert("버튼 클릭")
        }}
      />

      <Button 
        text={"버튼테스트"}
        type={"POSITIVE"}
        onClick={()=>{
          alert("버튼 클릭")
        }}
      />

      <Button 
        text={"버튼테스트"}
        type={"NEGATIVE"}
        onClick={()=>{
          alert("버튼 클릭")
        }}
      />
      {/* <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div> */}
      {/* <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/New"}>New</Link>
        <Link to={"/Diary"}>Diary</Link>
      </div> */}
      {/* <button
        onClick={onClickButton}
      >new 페이지로 이동</button> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary/:id" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App_backup
