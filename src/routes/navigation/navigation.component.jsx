import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import { UserContext } from './../../contexts/user.context';
import { CartContext } from '../../contexts/cart.context';
import { signOutUser } from '../../utils/firebase/firebase.utils';
import CartIconComponent from './../../components/cart-icon/cart-icon.component';
import CartDropdownComponent from '../../components/cart-dropdown/cart-dropdown.component';
import './navigation.component.scss';

const NavigationComponent = () => {
  
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  // console.log(currentUser);
    return (
      <Fragment>
        <header className="header">
          <nav className="nav">
          <Link className="nav__logo" to="/">
            <CrwnLogo />
          </Link>
            <ul className="nav__links">
                <li><Link className="link" to="/shop">SHOP</Link></li>
                <li>
                  {
                    currentUser ?
                    (<span className="link" onClick={signOutUser}>SIGN OUT</span>) :
                    (<Link className="link" to="/auth">SIGN IN</Link>)
                  }
                </li>
                <li><CartIconComponent /></li>
            </ul>
            
          </nav>
          { isCartOpen && <CartDropdownComponent /> }
          
        </header>
        <Outlet />
      </Fragment>
    )
  }

  export default NavigationComponent