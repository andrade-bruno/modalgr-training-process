import React, { useState, useEffect } from 'react'
import IUser from 'interfaces/IUser'
import http from 'services/http'
import { AxiosRequestConfig } from 'axios'

interface Props {
	user: IUser
	setUser: React.Dispatch<React.SetStateAction<IUser>>
	token: string | null | undefined
	config: AxiosRequestConfig
	login: (email: string, password: string) => void
}

const UserContext = React.createContext<Props>({} as Props)
UserContext.displayName = 'UserContext'

export const UserProvider = ({children}: {children: JSX.Element}) => {
	const [user, setUser] = useState<IUser>({} as IUser)
	const [token, setToken] = useState<string | null | undefined>('')
	const [config, setConfig] = useState<AxiosRequestConfig>({})

	useEffect(() => {
		async function getJwt() {
			const res = await http.getJwt()
			setToken(res)
		}
		getJwt()
	}, [])

	useEffect(() => {
		setConfig({
			headers: {
				Authorization: `Bearer ${token}`
			}
		})
	}, [token])

	const login = async (email: string, password: string) => {
		try {
			const res = await http.post('login', {email, password})
			setUser(res.data.colaborador)
			setToken(res.data.token)
		} catch (error) {
			console.log('login error: ', error)
		}
	}

	return (
		<UserContext.Provider value={{user, setUser, token, config, login}}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => {
	return React.useContext(UserContext)
}