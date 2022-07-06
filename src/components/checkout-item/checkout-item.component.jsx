import './checkout-item.component.scss';
import { useContext } from 'react'
import { CartContext } from '../../contexts/cart.context';

const CheckoutItemComponent = ({cartItem}) => {
    const { deleteItemFromCart, reduceQuantity, addItemToCart } = useContext(CartContext);
    const { id, name, imageUrl, price, quantity } = cartItem;
    const reduceQuantityHandler = () => reduceQuantity(id);
    const addItemToCartHandler = () => addItemToCart(cartItem);
    const deleteItemFromCartHandler = () => deleteItemFromCart(id);
    return (
        <div className='checkout-item-container'>
            <div className='image-container'>
                <img src={imageUrl} alt={name}/>
            </div>
            <span className='name'>{name}</span>
            <div className='quantity'>
                <span className='arrow' onClick={reduceQuantityHandler}>&#10094;</span>
                <span className='value'>{quantity}</span>
                <span className='arrow' onClick={addItemToCartHandler}>&#10095;</span>
            </div>
            <span className='price'>{price}</span>
            <div onClick={deleteItemFromCartHandler} className='remove-button'>&#10005;</div>
        </div>
    )
}

export default CheckoutItemComponent;


