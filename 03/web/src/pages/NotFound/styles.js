import styled from 'styled-components'
import theme from 'theme'

export const NotFoundStyles = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding: 20px;
`

export const Text404 = styled.p`
    color: ${theme.fontColor.primary};
    font-size: 42px;
`

export const TextMessage = styled.p`
    font-size: 20px;
`