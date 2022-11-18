import React from 'react';

import { Button, Snackbar, InputLabel } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';
import { useCartContext } from 'context/Cart';
import Product from 'components/Product';
import { useNavigate } from 'react-router-dom';
import { PaymentContext } from 'context/Payment';

function Cart() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const navigate = useNavigate()

  const { cart } = useCartContext()
  const { paymentMethod } = React.useContext(PaymentContext)

  return (
    <Container>
      <Voltar onClick={() => navigate(-1)} />
      {paymentMethod.name}
      <h2>
        Carrinho
      </h2>
      {
        cart.map(item => (
          <Product {...item} key={item.id} />
        ))
      }
      <PagamentoContainer>
        <InputLabel> Forma de Pagamento </InputLabel>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ </span>
        </div>
        <div>
          <h2> Saldo: </h2>
          <span> R$ </span>
        </div>
        <div>
          <h2> Saldo Total: </h2>
          <span> R$ </span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
        }}
        color="primary"
        variant="contained"
      >
        Comprar
      </Button>
      <Snackbar
        anchorOrigin={
          {
            vertical: 'top',
            horizontal: 'right'
          }
        }
        open={openSnackbar}
        onClose={() => setOpenSnackbar(false)}
      >
        <MuiAlert
          onClose={() => setOpenSnackbar(false)}
          severity="success"
        >
          Compra feita com sucesso!
        </MuiAlert>
      </Snackbar>
    </Container>
  )
}

export default Cart;