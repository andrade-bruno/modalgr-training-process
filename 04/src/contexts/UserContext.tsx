import React, { useEffect, useState } from 'react'
import IUser from 'interfaces/IUser'
import http from 'services/http'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
   
interface Props {
	user: IUser
	setUser: React.Dispatch<React.SetStateAction<IUser>>
	setToken: React.Dispatch<React.SetStateAction<string | null | undefined>>
	token: string | null | undefined
	login: (email: string, password: string) => void
	logout: () => void
	checkIfCorrectPassword: (email: string, password: string) => Promise<boolean | undefined>
}

const UserContext = React.createContext<Props>({} as Props)
UserContext.displayName = 'UserContext'

export const UserProvider = ({children}: {children: JSX.Element}) => {
	const [user, setUser] = useState<IUser>({} as IUser)
	const [token, setToken] = useState<string | null | undefined>(localStorage.getItem('token'))

	const navigate = useNavigate()

	useEffect(() => {
		const user = localStorage.getItem('user')
		if (user) {
			const userObj = JSON.parse(user) as IUser
			setUser(userObj)
			if (window.location.pathname === '/') navigate('/system/myreleases')
		} else {
			setUser({} as IUser)
		}	
	}, [])

	const login = async (email: string, password: string) => {
		interface colaboradorResponseProps extends IUser {
			senha?: string
		}
		
		try {
			const res = await http.post<{
				mensagem: string, colaborador: colaboradorResponseProps, token: string
			}>('login', {email: email, senha: password})

			const { colaborador, token } = res.data

			if (colaborador.nivel_id === 3) {
				toast.info(`${colaborador.nome.split(' ')[0]}, seu acesso ainda não foi concedido. Aguarde liberação.`, {autoClose: false})
				return false
			}
			
			delete colaborador.senha //Security reasons

			setUser(colaborador)
			setToken(token)
			localStorage.setItem('token', token)
			localStorage.setItem('user', JSON.stringify(colaborador))
			toast.success(`Bem vindo(a) ${colaborador.nome.split(' ')[0]}!`)
			setTimeout(() => navigate('/system/myreleases'), 2500)
		} catch (error: any) {
			const { response, message } = error
			response?.data ? toast.error(`${response.data}`)
				: message ? toast.error(`${message}`)
					: toast.error('Não foi possível acessar a plataforma')
		}
	}

	const logout = async () => {
		setUser({} as IUser)
		setToken('')
		localStorage.removeItem('token')
		localStorage.removeItem('user')
		navigate('/')
	}

	const checkIfCorrectPassword = async (email: string, password: string) => {
		try {
			const res = await http.post<{
				mensagem: string, colaborador: IUser, token: string
			}>('login', {email: email, senha: password})
			if (res.data.colaborador) return true
		} catch (error: any) {
			return false
		}
	}

	return (
		<UserContext.Provider value={{
			user,
			setUser,
			token,
			setToken,
			login,
			logout,
			checkIfCorrectPassword
		}}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => {
	return React.useContext(UserContext)
}