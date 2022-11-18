import React from 'react'
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
  const { name, setName, balance, setBalance } = React.useContext(UserContext)

  return (
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
        disabled={name.length < 3 || balance <= 0}
        onClick={() => { navigate('/market') }}
      >
        Avançar
      </Button>
    </Container>
  )
};