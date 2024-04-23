import { useState } from 'react';
import './../assets/scss/layouts/Header.scss'

const Header = () => {
  const dt = new Date();
  const [year, setYear] = useState(dt.getFullYear())
  const [month, setMonth] = useState(dt.getMonth() + 1)
  return (
    <header>
      <button 
        type="button"
        onClick={()=>{
          if(month < 2) {
            setYear(year - 1)
            setMonth(12)
          } else {
            setMonth(month - 1)
          }
        }}
      >
        이전
      </button>
      <strong>{year + '년'} {month + '월'}</strong>
      <div>{dt.toLocaleDateString().substring(0, 7)}</div>
      <button 
        type="button"
        onClick={()=>{
          if(month < 12) {
            setMonth(month + 1)
          } else {
            setYear(year + 1)
            setMonth(1)
          }
        }}
      >
        다음
      </button>
    </header>
  )
}

export default Header