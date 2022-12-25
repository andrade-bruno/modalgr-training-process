import styled, { css } from 'styled-components'
import { AdaptiveImg, fadeAnimation } from 'styles/commom'

export const TemplateCard = styled.section`
	box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.20);
	border-radius: 8px;
	background: #f5f5f5;
	padding: 10px;
	min-height: 26vh;
	min-width: 26vh;
	overflow: hidden;
`

export const AnimatedBorder = css`
	--angle: 0deg;

	border: 4px solid transparent;
	background-origin: border-box;
	background-clip: padding-box, border-box;
	animation: rotate 10s infinite;

	border-image: 
		conic-gradient(
			from var(--angle),
			#d53e33 0deg 90deg,
			#fbb300 90deg 180deg,
			#377af5 180deg 270deg,
			#399953 270deg 360deg
		) 1 stretch;

	@property --angle {
		syntax: "<angle>";
		initial-value: 0deg;
		inherits: false;
	}

	@keyframes rotate {
		from {
			--angle: 0deg;
		}
		to {
			--angle: 360deg;
		}
	}
`

export const Main = styled.main`
	width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    flex-wrap: wrap;
	gap: 20px;

	@media (min-width: 840px) {
		padding: 0px;
        gap: 32px;
        justify-content: flex-start;
    }
    @media (max-width: 840px) {
		padding: 40px;
        gap: 64px;
        justify-content: center;
    }
    @media (max-width: 360px) {
		padding: 10px;
        gap: 64px;
        justify-content: center;
    }

	${fadeAnimation}
`

export const WelcomeCard = styled(TemplateCard)`
	display: flex;
	flex-direction: row;
    flex-wrap: wrap;
	gap: 10px;
	align-items: center;
	justify-content: space-between;
	padding: 0 40px;

	@media (min-width: 840px) {
		width: 60%;
		flex-direction: row;
    }
    @media (max-width: 840px) {
		width: 100%;
        flex-direction: row;
    }
    @media (max-width: 360px) {
		width: 100%;
        flex-direction: column;
    }
`

export const DashboardBike = styled.img`
	${AdaptiveImg};
`

export const SquareCard = styled(TemplateCard)`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: space-evenly;
	padding: 40px 30px;
	min-w

	${(props) => props.title == 'co2' && AnimatedBorder}
`

export const CounterHighlight = styled.p((props) => `
	font-size: ${props.title ? '32px' : '16px'};
	margin: 0px;
	padding: 0px;
`)