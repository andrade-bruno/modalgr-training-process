import React from 'react';

import { Container } from './styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useCartContext } from 'context/Cart';

function Product({ name, photo, price, id }) {
  const { cart, addProduct, removeProduct } = useCartContext()
  const currentProduct = cart.find(item => item.id === id)

  return (
    <Container>
      <div>
        <img
          src={`/assets/${photo}.png`}
          alt={`Foto de ${name}`}
        />
        <p>
          {name} - R$ {price?.toFixed(2)} <span>Kg</span>
        </p>
      </div>
      <div>
        <IconButton
          color="secondary"
          onClick={() => removeProduct(id)}
        >
          <RemoveIcon />
        </IconButton>
        {currentProduct?.quantity || 0}
        <IconButton
          color="primary"
          onClick={() => addProduct({ name, photo, price, id })}
        >
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default React.memo(Product)