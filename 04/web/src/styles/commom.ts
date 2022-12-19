import styled from 'styled-components'
import { theme } from './theme'

export const Container = styled.main`
	height: 100vh;
	width: 100vw;
	display: flex;
	align-items: center;
	justify-content: center;
	padding: 2vw;
	background-color: #F1F1F1;

	@media (max-width: 360px) {
		height: auto;
	}
`

export const Box = styled.section`
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	border-radius: 6px;
	box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.5);

	@media (min-width: 840px) {
		height: 90vh;
		width: 90vw;
	}

	@media (max-width: 840px) {
		height: 86vh;
		width: 86vw;
	}

	@media (max-width: 360px) {
		height: 100%;
		width: 94vw;
		flex-direction: column;
		align-items: center;
		justify-content: center;
	}
`

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content; space-between;
	padding: 10px 20px;
	background-color: #FFF;

	@media (min-width: 840px) {
		height: 100%;
		width: 60%;
	}

	@media (max-width: 840px) {
		height: 100%;
		width: 60%;
	}

	@media (max-width: 360px) {
		width: 100%;
	}
`

export const Details = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: space-around;
	gap: 2px;
	padding: 10px 20px;
	background-color: ${theme.colors.main};
	
	p {
		color: #FFF;
		font-weight: 900;

		@media (min-width: 840px) {
			font-size: 1.75rem;
		}
	
		@media (max-width: 840px) {
			font-size: 1.25rem;
		}
	
		@media (max-width: 360px) {
			font-size: 1rem;
		}
	}
	
	@media (min-width: 840px) {
		height: 100%;
		width: 40%;
	}

	@media (max-width: 840px) {
		height: 100%;
		width: 40%;
	}

	@media (max-width: 360px) {
		width: 100%;
	}
`

export const Logo = styled.img`
	object-fit: contain;
	z-index: 1;
	
	@media (min-width: 840px) {
		width: 10rem;
		height: 14rem;
	}

	@media (max-width: 840px) {
		width: 8rem;
		height: 12rem;
	}

	@media (max-width: 360px) {
		width: 6rem;
		height: 8rem;
	}
`