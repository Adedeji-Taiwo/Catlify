import React from 'react'


const Button = ({style, onClick, text, value}) => {
    return (
        <>
            <button style = {style} onClick = {onClick} value={value}>{text}</button>
        </>
    )
}

export default Button;
