import useInput from './../hooks/useInput'

// 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 조건부 호출 불가능 ex) if, for
// 나만의 훅 제작 가능

const HookExam = () => {
    const [input, onChange] = useInput();
    
    return (
        <div>
            <input value={input} onChange={onChange} />
        </div>
    )
}

export default HookExam;