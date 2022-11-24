import styled from "styled-components";

const imgPercentageSizeTablet = 33.08

export const Container = styled.main`
    display: flex;
    align-items: flex-start;
    justify-content: center;

    @media (min-width: 768px) {
        padding: 64px 152px;
        flex-direction: row;
    }
    @media (max-width: 768px) {
        padding: 32px 32px;
        flex-direction: row;
    }
    @media (max-width: 360px) {
        padding: 0px;
        flex-direction: column;
    }
`

export const ProductImage = styled.img`
    object-fit: contain;

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: ${imgPercentageSizeTablet}%;
    }
    @media (max-width: 360px) {
        width: 100%;
    }
`

export const ProductItens = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 8px;
    padding: 16px;

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: ${100 - imgPercentageSizeTablet}%;
    }
    @media (max-width: 360px) {
        width: 100%;
    }
`

export const Title = styled.h1`
    text-align: left;

    @media (min-width: 768px) {
        font-size: 52px;
    }
    @media (max-width: 768px) {
        font-size: 22px;
    }
    @media (max-width: 360px) {
        font-size: 22px;
    }
`

export const Price = styled.p`
    font-weight: 600;
`

export const Description = styled.p`
    text-align: justify;
`