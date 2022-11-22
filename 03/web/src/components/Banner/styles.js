import styled from "styled-components";

export const BannerStyle = styled.div`
    width: 100vw;
    height: 352px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    position: relative;
    background-image: url('/images/hero.png');
    box-shadow: inset 0 0 200px 0 #000;

    ul {
        position: absolute;
        bottom: 20px;
        left: 152px;
        color: white;
        text-align: left;
        display: flex;
        flex-direction: column;
        gap: 16px;

        list-style-type: none;
    }

    ul li:first-child {
        font-size: 200%;
        font-weight: 600;
    }
`