import { ReactComponent as CartLogo } from './../../assets/shopping-bag.svg';
import './cart-icon.component.scss';
const CartIconComponent = () => {
  return (
    <div className="cart-logo-container">
      <CartLogo className="cart-logo"/>
      <span className="item-count">10</span>
    </div>
  );
}

export default CartIconComponent;