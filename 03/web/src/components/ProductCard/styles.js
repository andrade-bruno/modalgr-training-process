import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'theme'

export const ProductCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    max-height: 252px;

    @media (min-width: 768px) {
        width: 176px;
        font-size: 1rem;
    }
    @media (max-width: 768px) {
        width: 164px;
        font-size: 0.875rem;
    }
    @media (max-width: 360px) {
        width: 156px;
        font-size: 0.75rem;
    }

    img {
        width: 100%;
        height: 176px;
    }

    .price {
        font-weight: 600;
    }
`

export const Hyperlink = styled(Link)`
    color: ${theme.fontColor.primary};
    text-decoration: none;
    font-weight: 600;
`