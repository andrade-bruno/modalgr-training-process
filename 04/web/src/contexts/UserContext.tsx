import React, { useState } from 'react'
import IUser from 'interfaces/IUser'

const UserContext = React.createContext({})
UserContext.displayName = 'UserContext'

interface UserProviderProps {
	children: JSX.Element
}

export const UserProvider = ({children}: UserProviderProps) => {
	const [user, setUser] = useState<IUser>({} as IUser)

	return (
		<UserContext.Provider value={{user, setUser}}>
			{children}
		</UserContext.Provider>
	)
}

export const useUserContext = () => {
	return React.useContext(UserContext)
}