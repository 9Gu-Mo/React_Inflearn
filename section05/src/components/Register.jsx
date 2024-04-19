import { useState, useRef } from "react"

const Register = () => {
    const [input, setInput] = useState({
        name: '',
        date: '',
        country: '',
        bio: ''
    })

    const countRef = useRef(0);
    const inputRef = useRef()

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = () => {
        if(input.name === '') {
            // 이름을 입력하는 dom요소에 포커스
            inputRef.current.focus();
        }
    }

    return (
        <div>
            {/* 이름 */}
            <div>
                <input
                    ref={inputRef}
                    name="name"
                    placeholder="이름" 
                    type="text"
                    value={input.name}
                    onChange={onChange}
                />
                {input.name}
            </div>

            {/* 날짜 */}
            <div>
                <input
                    name="date"
                    type="date" 
                    onChange={onChange}
                    value={input.date}
                />
                {input.date}
            </div>

            {/* 국적 */}
            <div>
                <select
                    name="country"
                    onChange={onChange}
                    value={input.country}
                >
                    <option></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>

            {/* 자기소개 */}
            <div>
                <textarea
                    name="bio"
                    value={input.bio} 
                    onChange={onChange}
                />
                {input.bio}
            </div>

            <button onClick={onSubmit}>제출</button>
        </div>
    )
}

export default Register