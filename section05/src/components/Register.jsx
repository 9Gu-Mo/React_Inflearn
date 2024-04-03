import { useState, useRef } from "react"

const Register = () => {
    const [input, setInput] = useState({
        name: "",
        birth: "",
        country: "",
        bio: "",
    });

    const countRef = useRef(0);
    // console.log(refObj.current);
    const inpRef = useRef();

    const onChange = (e) => {
        countRef.current++;
        console.log(countRef.current)
        // console.log(e.target.name, e.target.value)
        setInput({
            ...input,
            // tag의 name값 호출
            // birth: e.target.value
            [e.target.name]: e.target.value,
        })
    }

    const onSubmit = (e) => {
        if(input.name === "") {
            console.log(inpRef.current)
            inpRef.current.focus();
        }
    }

    return (
        <div>
            <div>
                <input
                    ref={inpRef}
                    name="name"
                    type="text" 
                    placeholder={"이름"}
                    onChange={onChange}
                    value={input.name}
                />
                {input.name}
            </div>

            <div>
                <input
                    name="birth"
                    type="date" 
                    onChange={onChange}
                    value={input.birth}
                />
                {input.birth}
            </div>

            <div>
                <select
                    name="country"
                    value={input.country}
                    onChange={onChange}
                >
                    <option value=""></option>
                    <option value="kr">한국</option>
                    <option value="us">미국</option>
                    <option value="uk">영국</option>
                </select>
                {input.country}
            </div>

            <div>
                <textarea
                    name="bio"
                    value={input.bio}
                    onChange={onChange}
                />
                {input.bio}
            </div>
            
            <button 
                type="button"
                onClick={onSubmit}
            >
                제출
            </button>
        </div>
    )
}

export default Register