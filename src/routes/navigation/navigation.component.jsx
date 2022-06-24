import { Fragment, useContext } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import { UserContext } from './../../contexts/user.context'; 
import { signOutUser } from '../../utils/firebase/firebase.utils';
import './navigation.component.scss';

const NavigationComponent = () => {
  
  const { currentUser } = useContext(UserContext);

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
            </ul>
            
          </nav>
        </header>
        <Outlet />
      </Fragment>
    )
  }

  export default NavigationComponent