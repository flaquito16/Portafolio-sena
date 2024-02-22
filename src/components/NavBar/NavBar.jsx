import React from 'react'

export const NavBar = ({children}) => {
    return (
        <nav>
            <ul>
                {children}
            </ul>
        </nav>
    )
}
