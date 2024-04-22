import { memo } from 'react'
import './Header.scss'

const Header = () => {
    return (
        <div className="header">
            <h3>오늘은 💲</h3>
            <p>{new Date().toDateString()}</p>
        </div>
    )
}

export default memo(Header)