import styled from "styled-components";

export const Container = styled.main`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`

export const Products = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 64px;

    @media (min-width: 768px) {
        padding: 64px 152px;
    }
    @media (max-width: 768px) {
        padding: 32px 32px;
    }
    @media (max-width: 360px) {
        padding: 16px 16px;
    }
`