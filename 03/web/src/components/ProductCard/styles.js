import { Link } from 'react-router-dom'
import styled from 'styled-components'
import theme from 'theme'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const ProductCardStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 8px;
    max-height: 252px;
    position: relative;

    white-space: nowrap;
    text-overflow: ellipsis;

    &:first-child {
        overflow: hidden;
    }

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
        min-height: 176px;
    }

    .price {
        font-weight: 600;
    }
`

export const Icons = styled.div`
    position: absolute;
    top: 10px;
    right: 10px;

    display: ${(props) => props.pathname === '/products' ? 'block' : 'none'};
`

export const Icon = styled(FontAwesomeIcon)`
    cursor: pointer;
    color: ${theme.fontColor.white};
    margin-left: 24px;

    &:hover {
        transform: translateY(-4px);
        color: ${theme.fontColor.dark};
    }
`

export const Hyperlink = styled(Link)`
    color: ${theme.fontColor.primary};
    text-decoration: none;
    font-weight: 600;
`