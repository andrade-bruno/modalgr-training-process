import React from 'react'

export const UserContext = React.createContext();
UserContext.displayName = "User"

export const UserProvider = ({ children }) => {
    const [name, setName] = React.useState('')
    const [balance, setBalance] = React.useState(0)

    return (
        <UserContext.Provider value={{ name, setName, balance, setBalance }}>
            {children}
        </UserContext.Provider>
    )
}