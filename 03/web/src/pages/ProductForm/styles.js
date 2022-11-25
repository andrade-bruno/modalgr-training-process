import styled from "styled-components";
import Button from 'components/Button';

export const Container = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    
    form {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: center;
        gap: 16px;
    }
    
    @media (min-width: 768px) {
        padding: 64px 0px;

        form {
            width: 38.82%;
        }

        form h1 {
            font-size: 32px;
        }
    }
    @media (max-width: 768px) {
        padding: 32px 32px;

        form {
            width: 100%;
        }

        form h1 {
            font-size: 22px;
        }
    }
    @media (max-width: 360px) {
        padding: 16px 16px;

        form {
            width: 100%;
        }

        form h1 {
            font-size: 22px;
        }
    }
`

export const AddButton = styled(Button)`
    width: 100%;
    display: flex;
    justify-content: center;
`