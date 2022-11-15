import React from "react";
import styled from 'styled-components'

import Title from "../Title";
import Account from "../Account";
import Extract from "../Extract";

const ContainerDiv = styled.div`
    background-color: #F1F1F1;
    min-height: 90vh;
    padding: 0px 15vw;
`

const ContentContainer = styled.section`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media (max-width: 800px) {
      flex-direction: column;
    }
`

export default function Container() {
    return (
        <ContainerDiv>
            <Title>Olá Fulano!</Title>
            <ContentContainer>
                <Account />
                <Extract />
            </ContentContainer>
        </ContainerDiv>
    );
};
