import ButtonComponent from '../button/button.component';
import './cart-dropdown.component.scss';

const CartDropdownComponent = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items"></div>
      <ButtonComponent>GO TO CHECKOUT</ButtonComponent>
    </div>
  );
}
export default CartDropdownComponent;