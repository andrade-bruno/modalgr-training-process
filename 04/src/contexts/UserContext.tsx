import React, { useEffect, useState } from 'react'
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

	useEffect(() => {
		const user = localStorage.getItem('user')
		user ? setUser(JSON.parse(user)) : setUser({} as IUser)
	}, [])

	const login = async (email: string, password: string) => {
		try {
			const res = await http.post<{
				mensagem: string, colaborador: IUser, token: string
			}>('login', {email: email, senha: password})
			const { colaborador, token } = res.data
			setUser(colaborador)
			setToken(token)
			localStorage.setItem('token', token)
			localStorage.setItem('user', JSON.stringify(colaborador))
		} catch (error) {
			console.log('login error: ', error)
		}
	}

	const logout = async () => {
		setUser({} as IUser)
		setToken('')
		localStorage.removeItem('token')
		localStorage.removeItem('user')
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