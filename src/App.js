import './App.scss';
import { Routes, Route } from 'react-router-dom';
import HomeComponent from './routes/home/home.component';
import NavigationComponent from './routes/navigation/navigation.component';
import { SignInComponent } from './routes/sign-in/sign-in.component';


const ShopComponent = () => {
  return (
    <div>
      <h1>Shop Component</h1>
    </div>
  )
}


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavigationComponent />}>
        <Route index element={<HomeComponent />} />
        <Route path="shop" element={<ShopComponent />}></Route>
        <Route path="sign-in" element={<SignInComponent />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
