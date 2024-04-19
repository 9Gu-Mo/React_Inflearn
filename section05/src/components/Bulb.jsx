import { useState } from "react"

const Bulb = () => {
    const [light, setLight] = useState("OFF")
    return (
        <div>
            {light === 'ON' ? (
                <div style={{backgroundColor: 'orange'}}>ON</div>
            ) : (
                <div style={{backgroundColor: 'gray'}}>ON</div>
            )}
            <button onClick={()=> {
                setLight(light === 'ON' ? 'OFF' : 'ON');
            }}>
                {light === 'ON' ? '끄기' : '켜기'}
            </button>
        </div>
    )
}

export default Bulb