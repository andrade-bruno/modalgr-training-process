import IPagination from 'interfaces/IPagination'

export const userPages: IPagination[] = [
	{
		id: 1,
		title: 'Meus lançamentos',
		path: '/myreleases'
	}
]


export const adminPages: IPagination[] = [
	{
		id: 1,
		title: 'Dashboard',
		path: '/admin/dashboard'
	},
	{
		id: 2,
		title: 'Lançamentos',
		path: '/admin/releases'
	},
	{
		id: 3,
		title: 'Usuários',
		path: '/admin/users'
	},
	{
		id: 4,
		title: 'Documentação',
		path: '/admin/docs'
	}
]