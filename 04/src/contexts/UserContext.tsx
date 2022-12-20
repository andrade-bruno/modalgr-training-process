import React, { useState } from 'react'
import IUser from 'interfaces/IUser'
import http from 'services/http'

interface Props {
	user: IUser
	setUser: React.Dispatch<React.SetStateAction<IUser>>
	token: string | null | undefined
	login: (email: string, password: string) => void
	logout: () => void
}

const UserContext = React.createContext<Props>({} as Props)
UserContext.displayName = 'UserContext'

export const UserProvider = ({children}: {children: JSX.Element}) => {
	const [user, setUser] = useState<IUser>({} as IUser)
	const [token, setToken] = useState<string | null | undefined>(localStorage.getItem('token'))

	const login = async (email: string, password: string) => {
		try {
			const res = await http.post('login', {email: email, senha: password})
			setUser(res.data.colaborador)
			setToken(res.data.token)
			localStorage.setItem('token', res.data.token)
		} catch (error) {
			console.log('login error: ', error)
		}
	}

	const logout = async () => {
		setUser({} as IUser)
		setToken('')
		localStorage.removeItem('token')
	}

	return (
		<UserContext.Provider value={{user, setUser, token, login, logout}}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => {
	return React.useContext(UserContext)
}