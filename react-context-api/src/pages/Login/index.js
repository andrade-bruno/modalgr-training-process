import { Button } from '@material-ui/core';
import {
  Container,
  Titulo,
  InputContainer
} from './styles';
import {
  Input,
  InputLabel,
  InputAdornment
} from '@material-ui/core';

import { useNavigate } from 'react-router-dom'

import { UserContext } from 'context/User';

export default function Login() {
  const navigate = useNavigate();

  return (
    <UserContext.Consumer>
      {({ name, setName, balance, setBalance }) => (
        <>
          <Container>
            <Titulo>
              Insira o seu nome
            </Titulo>
            <InputContainer>
              <InputLabel>
                Nome
              </InputLabel>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </InputContainer>
            <InputContainer>
              <InputLabel>
                Saldo
              </InputLabel>
              <Input
                type="number"
                value={balance}
                onChange={(e) => setBalance(e.target.value)}
                startAdornment={
                  <InputAdornment position="start">
                    R$
                  </InputAdornment>
                }
              />
            </InputContainer>
            <Button
              variant="contained"
              color="primary"
              onClick={() => { navigate('/feira') }}
            >
              Avançar
            </Button>
          </Container>
        </>
      )}
    </UserContext.Consumer>
  )
};