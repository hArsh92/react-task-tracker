import React from 'react'
import Button from './Button'

interface HeaderProps {
    title?: string,
    onAdd: () => void,
    shouldShowAdd: boolean
}

const Header: React.FC<HeaderProps> = ({ title, shouldShowAdd, onAdd }) => {
    return (
        <header className='header'>
            <h1>{title}</h1>
            <Button
                text={shouldShowAdd ? 'Close' : 'Add' }
                color={shouldShowAdd ? 'red' : 'green' }
                onClick={onAdd}
            />
        </header>
    )
}

export default Header
