import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'theme'

export const ProductCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 8px;
    width: 176px;
    max-height: 252px;

    img {
        width: 176px;
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