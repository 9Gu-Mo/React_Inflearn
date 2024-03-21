import "./Main.scss";

// jsx 주의 사항
// 중괄호 내부에는 자바스크립트 표현식만 사용 가능
// 숫자, 문자열, 배열 값만 렌더링 됨
const Main = () => {
    const user = {
        name: "이정환",
        isLogin: true
    }
    if(user.isLogin) {
        return <div className="logout">로그아웃</div>
    } else {
        return <div>로그인</div>
    }
    // return (
    //     <>
    //         {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
    //     </>        
    // )
}

export default Main