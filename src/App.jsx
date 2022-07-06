import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './routes/home/home.component';
import NavigationComponent from './routes/navigation/navigation.component';
import AuthenticationComponent from './routes/authentication/authentication.component';
import ShopComponent from './routes/shop/shop.component';
import CheckoutComponent from './routes/checkout/checkout.component';

const App = () => {
    return ( 
        <Routes>
            <Route path = '/' element = { < NavigationComponent / > }>
                <Route index element = { < HomeComponent / > }/>
                <Route path = "shop" element = { <ShopComponent /> }>
                </Route>
                <Route path = "auth" element = { <AuthenticationComponent /> } ></Route>
                <Route path="checkout" element={ <CheckoutComponent /> }></Route>
            </Route>
        </Routes>
    );
}

export default App;