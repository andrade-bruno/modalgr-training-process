import React from "react";
import styled from 'styled-components'

import Title from "../Title";
import Account from "../Account";
import Extract from "../Extract";

const ContainerDiv = styled.div`
    background-color: ${({theme}) => theme.body};
    min-height: 90vh;
    padding: 0px 15vw;
`

const ContentContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${({theme}) => theme.text};

    @media (max-width: 800px) {
      flex-direction: column;
    }
`

export default function Container() {
    return (
        <ContainerDiv>
            <Title>Olá Bruno!</Title>
            <ContentContainer>
                <Account />
                <Extract />
            </ContentContainer>
        </ContainerDiv>
    );
};
