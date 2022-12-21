import IPagination from 'interfaces/IPagination'

export const userPages: IPagination[] = [
	{
		id: 1,
		title: 'Meus lançamentos',
		path: '/'
	},
	{
		id: 2,
		title: 'Documentação',
		path: '/docs'
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
		title: 'Colaboradores',
		path: '/admin/collaborators'
	}
]