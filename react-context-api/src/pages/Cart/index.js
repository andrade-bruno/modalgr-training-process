import React from 'react';
import { useNavigate } from 'react-router-dom';

import { Button, Snackbar, InputLabel, Select, MenuItem } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import { Container, Voltar, TotalContainer, PagamentoContainer } from './styles';

import { useCartContext } from 'context/Cart';
import { usePaymentContext } from 'context/Payment';
import { UserContext } from 'context/User';
import Product from 'components/Product';

function Cart() {
  const [openSnackbar, setOpenSnackbar] = React.useState(false);
  const navigate = useNavigate()

  const { cart, totalPrice, finishPayment } = useCartContext()
  const { paymentMethod, paymentTypes, handlePaymentMethod } = usePaymentContext()
  const { balance = 0 } = React.useContext(UserContext)

  const finalBalance = React.useMemo(() => (balance - totalPrice), [balance, totalPrice])

  return (
    <Container>
      <Voltar onClick={() => navigate(-1)} />
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
        <Select
          value={paymentMethod.id}
          onChange={(e) => handlePaymentMethod(e.target.value)}
        >
          {paymentTypes.map(item => (
            <MenuItem
              value={item.id}
              key={item.id}
            >
              {item.name}
            </MenuItem>
          ))}
        </Select>
      </PagamentoContainer>
      <TotalContainer>
        <div>
          <h2>Total no Carrinho: </h2>
          <span>R$ {totalPrice.toFixed(2)}</span>
        </div>
        <div>
          <h2>Saldo: </h2>
          <span> R$ {Number(balance).toFixed(2)}</span>
        </div>
        <div>
          <h2>Saldo Final: </h2>
          <span> R$ {finalBalance.toFixed(2)}</span>
        </div>
      </TotalContainer>
      <Button
        onClick={() => {
          setOpenSnackbar(true);
          finishPayment()
        }}
        color="primary"
        variant="contained"
        disabled={finalBalance < 0 || cart.length <= 0}
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