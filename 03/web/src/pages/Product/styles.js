import styled from "styled-components";
import CategorySection from 'components/CategorySection';

const imgPercentageSizeTablet = 33.08

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
        padding: 64px 152px;
        gap: 64px;
    }
    @media (max-width: 768px) {
        padding: 32px 32px;
        gap: 64px;
    }
    @media (max-width: 360px) {
        padding: 0px;
        gap: 32px;
    }
`

export const ProductContainer = styled.div`
    display: flex;
    justify-content: center;

    @media (min-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
    @media (max-width: 768px) {
        flex-direction: row;
        align-items: flex-start;
    }
    @media (max-width: 360px) {
        flex-direction: column;
        align-items: center;
    }
`

export const ProductImage = styled.img`
    object-fit: contain;
    box-shadow: 0px 15px 20px rgba(0, 0, 0, 0.25);

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

export const SimilarProducts = styled(CategorySection)`
    @media (max-width: 360px) {
        padding: 0 16px;
    }
`