// const Button = ({text, color, children}) => {
//     console.log(text, color);
//     const onClickButton = (e) => {
//         console.log(e);
//         console.log(text);
//     }
//     return (
//         <button 
//             style={{color:color}}
//             onClick={onClickButton}
//         >
//             {text} - {color.toUpperCase()}
//             {children}
//         </button>
//     )
// }

// Button.defaultProps = {
//     color:"black",
// }

// export default Button;

const Button = ({text, color, children}) => {
    const onClickButton = (e) => {
        console.log(e)
        console.log(text)
    }
    return (
        <button 
            style={{color:color}}
            onClick={onClickButton}
            // onMouseEnter={onClickButton}
        >
            {text.toUpperCase()} - {color.toUpperCase()}
            {children}
        </button>
    )
}

Button.defaultProps = {
    color: "black",
    text: "default"
}

export default Button