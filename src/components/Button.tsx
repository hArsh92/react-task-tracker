import React from 'react'

interface ButtonProps {
    text: string,
    color: string,
    onClick: () => void
}

const Button: React.FC<ButtonProps> = ({ text, color, onClick }) => {
    return (
        <button
            style={{ backgroundColor:color }}
            className='btn'
            onClick={onClick}>
        {text}
        </button>
    )
}

export default Button
