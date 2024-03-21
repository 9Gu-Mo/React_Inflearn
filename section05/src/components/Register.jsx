import { useState } from "react";

const Register = () => {

    const [name, setName] = useState('이름')
    const [birth, setBirth] = useState('')
    const [country, setCountry] = useState('')
    
    const onChangeName = (e) => {
        setName(e.target.value)
    }

    const onChangeBirth = (e) => {
        setBirth(e.target.value)
    }

    const onChangeCountry = (e) => {
        setCountry(e.target.value)
    }

    return (
        <div>
            <div>
                <input 
                    value={name}
                    onChange={onChangeName} 
                    type="text" 
                    placeholder={"이름"} 
                />
                {name}
            </div>

            <div>
                <input
                    value={birth}
                    type="date"
                    onChange={onChangeBirth}
                />
                {birth}                
            </div>
            
            <div>
                <select 
                    value={country}
                    onChange={onChangeCountry}
                >
                    <option></option>
                    <option>한국</option>
                    <option>미국</option>
                    <option>영국</option>
                </select>
                {country}
            </div>
        </div>
    )
}

export default Register;