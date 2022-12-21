import { useUserContext } from 'contexts/UserContext'
import Unauthorized from 'pages/Unauthorized'

const Dashboard = () => {
	const { user } = useUserContext()
	if (user.nivel_id !== 2) return <Unauthorized />

	return ( 
		<h1>Dashboard</h1>		
	)
}
 
export default Dashboard