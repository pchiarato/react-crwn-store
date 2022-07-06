import ButtonComponent from '../button/button.component';
import CartItemComponent from '../cart-item/cart-item.component';
import { useContext } from 'react';
import { CartContext } from './../../contexts/cart.context';
import { useNavigate } from 'react-router-dom';
import './cart-dropdown.component.scss';

const CartDropdownComponent = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  }
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map(item => (<CartItemComponent key={item.id} cartItem={item}/>)) }
      </div>
      <ButtonComponent onClick={goToCheckoutHandler}>CHECKOUT</ButtonComponent>
    </div>
  );
}
export default CartDropdownComponent;