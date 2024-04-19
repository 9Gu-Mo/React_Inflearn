import './DropDown.scss'

const DropDown = () => {
    return (
        <ul>
            {
                Array(3).fill('').map((li, i) => (
                    <li 
                        onClick={() => console.log('Dropdown${i + 1}')}
                        key={i}
                    >
                        Dropdown{i + 1}
                    </li>
                ))
            }
        </ul>
    )
}

export default DropDown