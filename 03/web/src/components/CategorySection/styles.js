import styled from 'styled-components'
import theme from 'theme'

export const CategorySectionStyle = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    width: 100%;
    align-items: flex-start;
`
export const CategoryHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    width: 100%;
    font-size: 32px;
    gap: 16px;

    a, link {
        text-decoration: none;
        color: ${theme.fontColor.primary};
        font-size: 16px;
        
        &:hover {
            transform: translateY(-4px);
        }
    }
`

export const List = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;

    @media (min-width: 768px) {
        gap: 32px;
        justify-content: flex-start;
    }
    @media (max-width: 768px) {
        gap: 16px;
        justify-content: center;
    }
    @media (max-width: 360px) {
        gap: 8px;
        justify-content: center;
    }
`