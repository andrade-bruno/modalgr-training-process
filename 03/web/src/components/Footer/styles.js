import styled from "styled-components";
import theme from "theme";

export const FooterStyle = styled.footer`
    bottom: 0;
    background: ${theme.background.lightblue};
    width: 100%;
    height: 100%;
    display: flex;
    padding: 32px;

    @media (min-width: 768px) {
        flex-direction: row;
        gap: 10px;
    }
    @media (max-width: 768px) {
        flex-direction: row;
        gap: 10px;
    }
    @media (max-width: 360px) {
        flex-direction: column;
        gap: 32px;
    }
`


export const FooterNav = styled.div`
    display: flex;
    align-items: flex-start;

    @media (min-width: 768px) {
        flex-direction: row;
        justify-content: center;
        width: 50%;
        gap: 112px;
    }
    @media (max-width: 768px) {
        flex-direction: column;
        width: 40%;
        gap: 26px;
    }
    @media (max-width: 360px) {
        flex-direction: column;
        align-items: center;
        width: 100%;
        gap: 26px;
    }

    img {
        width: 176px;
        height: 50px;

        @media (max-width: 768px) {
            max-width: 100%;
        }
    }
    
    div {
        display: flex;
        flex-direction: column;
        justify-content: center;

        @media (min-width: 768px) {
            gap: 24px;
            align-items: flex-start;
        }
        @media (max-width: 768px) {
            gap: 24px;
            align-items: flex-start;
        }
        @media (max-width: 360px) {
            gap: 16px;
            align-items: center;
        }
    }

`

export const TalkWithUs = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 16px;

    @media (min-width: 768px) {
        width: 50%;
    }
    @media (max-width: 768px) {
        width: 60%;
    }
    @media (max-width: 360px) {
        width: 100%;
    }

`
export const CopyrightSection = styled.div`
    bottom: 0;
    background: ${theme.background.white};
    width: 100%;
    padding: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`