import { Container } from './styles';
import { memo } from 'react';
import { IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';

function Product({ name, photo, price }) {
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
        <IconButton>
          <AddIcon />
        </IconButton>
      </div>
    </Container>
  )
}

export default memo(Product)