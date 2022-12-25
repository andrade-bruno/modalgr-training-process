import styled from 'styled-components'
import {
	Avatar as MuiAvatar
} from '@mui/material'

export const Main = styled.main`
	box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.20);
	border-radius: 8px;
	background: #f5f5f5;
	overflow: hidden;
	height: 85vh;
	display: flex;
	flex-direction: row;
	align-items: center;
`

export const Content = styled.div`
	display: flex;
	align-items: flex-start;
	justify-content: flex-start;
	gap: 40px;
	padding: 5vh;

	@media (min-width: 840px) {
		height: 100%;
		width: 70%;
	}

	@media (max-width: 840px) {
		height: 100%;
		width: 70%;
	}

	@media (max-width: 360px) {
		width: 100%;
	}
`

export const Avatar = styled(MuiAvatar)`
	width: 200px;
	height: 200px;
	
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	aling-items: flex-start;
	justify-content: flex-start;
	width: 50%;
`

export const BackgroundImg = styled.div`
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    background-image: url('/assets/login.png');

	@media (min-width: 840px) {
		height: 100%;
		width: 30%;
	}

	@media (max-width: 840px) {
		height: 100%;
		width: 30%;
	}

	@media (max-width: 360px) {
		width: 100%;
	}
`