import { ReactComponent as CartLogo } from './../../assets/shopping-bag.svg';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import './cart-icon.component.scss';



const CartIconComponent = () => {
  const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen)
  return (
    <div onClick={toggleIsCartOpen}  className="cart-logo-container">
      <CartLogo className="cart-logo"/>
      <span className="item-count">{cartCount}</span>
    </div>
  );
}

export default CartIconComponent;