import React from 'react';

import { Container } from './styles';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

import { useCartContext } from 'context/Cart';

function Product({ name, photo, price, id }) {
  const { addProduct } = useCartContext()

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
        >
          <RemoveIcon />
        </IconButton>
        <IconButton onClick={() => addProduct({ name, photo, price, id })}>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default React.memo(Product)