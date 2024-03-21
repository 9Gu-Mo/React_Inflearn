import {useState} from 'react';
const Counter = () => {
    const [count, setCount] = useState(1);
    return (
        <div>
            <h1>{count}</h1>
            <button 
                onClick={()=> {
                    setCount(count + 1)
                }}
            >
                +
            </button>
            <button
                onClick={()=> {
                    if(count > 1) {
                        setCount(count - 1);
                    } else {
                        alert("1이하는 불가능합니다.")
                    }
                }}
            >-</button>

            <button
                onClick={()=> {
                    setCount(1)
                }}
            >reset</button>
        </div>
    )
}

export default Counter