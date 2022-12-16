import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

import {
	CssBaseline,
	Box,
	Drawer,
	Toolbar,
	List,
	Typography,
	Divider,
	IconButton,
	ListItem,
	ListItemButton,
	ListItemIcon,
	ListItemText
} from '@mui/material'

import {
	ChevronRight,
	ChevronLeft,
	Menu as MenuIcon,
	DashboardRounded,
	BarChartRounded,
	ReceiptLongRounded,
	GroupsRounded,
	TextSnippetRounded
} from '@mui/icons-material'

import { useTheme } from '@mui/material/styles'
import { AppBar, DrawerHeader, drawerWidth, LogoMenuDrawer, Main } from './styles'

import { adminPages as admPages, userPages as usPages } from 'static/pagination'
import IPagination from 'interfaces/IPagination'

export default function DefaultPage() {
	const theme = useTheme()
	const navigate = useNavigate()

	const [open, setOpen] = React.useState(true)
	const [userPages] = React.useState<IPagination[]>(usPages)
	const [adminPages] = React.useState<IPagination[]>(admPages)

	const handleDrawerOpen = () => {
		setOpen(true)
	}

	const handleDrawerClose = () => {
		setOpen(false)
	}

	return (
		<Box sx={{ display: 'flex' }}>
			<CssBaseline />
			<AppBar position="fixed" open={open}>
				<Toolbar>
					<IconButton
						color="inherit"
						aria-label="open drawer"
						onClick={handleDrawerOpen}
						edge="start"
						sx={{ mr: 2, ...(open && { display: 'none' }) }}
					>
						<MenuIcon />
					</IconButton>
					<Typography variant="h6" noWrap component="div">BikeGR</Typography>
				</Toolbar>
			</AppBar>
			<Drawer
				sx={{
					width: drawerWidth,
					flexShrink: 0,
					'& .MuiDrawer-paper': {
						width: drawerWidth,
						boxSizing: 'border-box',
					},
				}}
				variant="persistent"
				anchor="left"
				open={open}
			>
				<DrawerHeader sx={{ display: 'flex', justifyContent: 'space-between' }}>
					<LogoMenuDrawer src='/assets/logo.png' alt='Logo' />
					<IconButton onClick={handleDrawerClose}>
						{theme.direction === 'ltr' ? <ChevronLeft /> : <ChevronRight />}
					</IconButton>
				</DrawerHeader>
				<Divider />
				<List>
					{userPages.map((item) => (
						<ListItem key={item.id} disablePadding>
							<ListItemButton onClick={() => navigate(item.path)}>
								<ListItemIcon>
									{item.id === 1 ? <ReceiptLongRounded /> : null}
								</ListItemIcon>
								<ListItemText primary={item.title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
				<Divider />
				<List>
					{adminPages.map((item) => (
						<ListItem key={item.id} disablePadding>
							<ListItemButton onClick={() => navigate(item.path)}>
								<ListItemIcon>
									{item.id === 1 ? <DashboardRounded /> :
										item.id === 2 ? <BarChartRounded /> :
											item.id === 3 ? <GroupsRounded /> :
												item.id === 4 ? <TextSnippetRounded />
													: null}
								</ListItemIcon>
								<ListItemText primary={item.title} />
							</ListItemButton>
						</ListItem>
					))}
				</List>
			</Drawer>
			<Main open={open}>
				<DrawerHeader />
				<Outlet />
			</Main>
		</Box>
	)
}