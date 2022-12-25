import styled from 'styled-components'

export const TemplateCard = styled.section`
	box-shadow: 6px 6px 12px rgba(0, 0, 0, 0.25);
	border-radius: 8px;
	background: #f5f5f5;
	padding: 10px;
`

export const Main = styled.main`
	width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
	gap: 20px;

	@media (min-width: 840px) {
        gap: 32px;
        justify-content: flex-start;
    }
    @media (max-width: 840px) {
        gap: 16px;
        justify-content: center;
    }
    @media (max-width: 360px) {
        gap: 8px;
        justify-content: center;
    }
`

export const WelcomeCard = styled(TemplateCard)`
	display: flex;
	flex-direction: row;
    flex-wrap: wrap;
	gap: 10px;
	width: 60%;
	align-items: center;
	justify-content: space-between;

	@media (min-width: 840px) {
        flex-direction: row;
    }
    @media (max-width: 840px) {
        flex-direction: row;
    }
    @media (max-width: 360px) {
        flex-direction: column;
    }
`

export const DashboardBike = styled.img`
	object-fit: contain;
	overflow: hidden;
	width: 10em;
	height: 10em;
`