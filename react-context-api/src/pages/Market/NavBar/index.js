import { Nav } from './styles';
import { ReactComponent as Logo } from 'assets/logo.svg';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import { useCartContext } from 'context/Cart';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
  const { productsAmount } = useCartContext()
  const navigate = useNavigate()
  return (
    <Nav>
      <Logo />
      <IconButton
        disabled={productsAmount <= 0}
        onClick={() => navigate('/cart')}
      >
        <Badge
          color="primary"
          badgeContent={productsAmount}
        >
          <ShoppingCartIcon />
        </Badge>
      </IconButton>
    </Nav>
  )
}