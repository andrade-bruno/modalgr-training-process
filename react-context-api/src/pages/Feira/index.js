import React from 'react'
import {
  Container,
  Header,
  Lista,
} from './styles';
import feira from './feira.json';
import Product from 'components/Product';
import NavBar from './NavBar';

import { UserContext } from 'context/User';

function Feira() {
  const { name, balance } = React.useContext(UserContext)

  return (
    <Container>
      <NavBar />
      <Header>
        <div>
          <h2> Olá! {name}</h2>
          <h3> Saldo: R$ {balance}</h3>
        </div>
        <p>Encontre os melhores produtos orgânicos!</p>
      </Header>
      <Lista>
        <h2>
          Produtos:
        </h2>
        {feira.map(product => (
          <Product
            {...product}
            key={product.id}
          />
        ))}
      </Lista>
    </Container>
  )
}

export default Feira;