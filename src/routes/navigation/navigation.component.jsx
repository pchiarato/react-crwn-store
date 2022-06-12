import { Fragment } from 'react'
import { Outlet, Link } from 'react-router-dom';
import { ReactComponent as CrwnLogo } from './../../assets/crown.svg';
import './navigation.component.scss';

const NavigationComponent = () => {
    return (
      <Fragment>
        <header className="header">
          <nav className="nav">
          <Link className="nav__logo" to="/">
            <CrwnLogo />
          </Link>
            <ul className="nav__links">
                <li><Link className="link" to="/shop">SHOP</Link></li>
                <li><Link className="link" to="/sign-in">SIGN IN</Link></li>
            </ul>
            
          </nav>
        </header>
        <Outlet />
      </Fragment>
    )
  }

  export default NavigationComponent