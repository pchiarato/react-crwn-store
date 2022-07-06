import './checkout.component.scss';
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';
import CheckoutItemComponent from '../../components/checkout-item/checkout-item.component';

const CheckoutComponent = () => {
    const { cartItems, cartTotal } = useContext(CartContext);
    return (
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'><span>Product</span></div>
                <div className='header-block'><span>Description</span></div>
                <div className='header-block'><span>Quantity</span></div>
                <div className='header-block'><span>Price</span></div>
                <div className='header-block'><span>Remove</span></div>
            </div>
      
            {
                cartItems.map((cartItem) => (
                    <CheckoutItemComponent key={cartItem.id} cartItem={cartItem}/>
                ))
            }
            <span className='total'>Total: ${cartTotal.toFixed(2)}</span>
        </div>
    );
}

export default CheckoutComponent;
