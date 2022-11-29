import React from 'react';
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import userService from 'services/userService';

const UserContext = React.createContext()
UserContext.displayName = 'User'

export const UserProvider = ({ children }) => {
    const [user, setUser] = React.useState()
    const navigate = useNavigate()

    async function login({ email, password }) {
        try {
            const response = await userService.login({ email, password })
            if (response.data[0]) {
                setUser(response.data[0])
                toast(`Bem vindo, ${response.data[0].firstName}`)
                navigate('/')
            } else {
                toast('Usuário ou senha inválida')
            }
        } catch (error) {
            toast(`Falha ao se autenticar: ${error.message}`)
            console.log('login error:')
            console.log(error)
        }
    }

    return (
        <UserContext.Provider value={{ user, login }}>
            {children}
        </UserContext.Provider>
    )
}

export function useUserContext() {
    return React.useContext(UserContext)
}