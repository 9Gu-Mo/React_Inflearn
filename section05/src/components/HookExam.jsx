
import useInput from "../hooks/useInput";

// 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 리액트 훅을 조건부로 호출할 수 없음
// 커스텀 훅 제작 가능

const HookExam = () => {
    const [input, onChange] = useInput();
    const [input2, onChange2] = useInput();

    return (
        <div>
            <input 
                type="text" 
                value={input}
                onChange={onChange}
            />
            <input 
                type="text" 
                value={input2}
                onChange={onChange2}
            />
        </div>
    )
}

export default HookExam