import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import Home from './components/Home'
import Products from './components/Products';
import Header from './components/layouts/Header';
import ProductsDetails from './components/ProductsDetails';
import Login from './components/Login';
import NotFound from './components/NotFound';
import { useEffect } from 'react';
import CheckoutProducts from './components/CheckoutProducts';
import Checkout from './components/Checkout';
import Payment from './components/Payment';
import { loadStripe } from '@stripe/stripe-js'
import {Elements} from '@stripe/react-stripe-js'

const promise = loadStripe("pk_test_51Oyb3sEcR4YWvloK4hjstMCSdulwLNCUGvWqXccP6ZHiK5R9ij3QZMILyZ3TnvoiKrm3IeuUVOTXusjUAlUsRn2z00rPYpVMWc")


const App = () => {

  useEffect(() => {
    auth.onAuthStateChange((authUser) => {
      console.log("User is -> ", authUser);

      if (authUser) {
        setUser(authUser);
      } else {
        setUser({user: null});
      }
    })
  }, []);
  return (
    <>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact>
          <Redirect path="/home" />
        </Route>
        <Route path="/" exact>
          <Home />
        </Route>

        <Route path="/products" exact>
          <Products />
        </Route>

        <Route path="/products/:id">
          <ProductsDetails />
          </Route>
          <Route path="/checkout_product">
            <CheckoutProducts />
          </Route>
          <Route path="/checkout">
            <Checkout />
          </Route>
          <Route path="/payment">
            <Elements stripe={promise}>
              <Payment />
            </Elements>
            </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
          <Route path="*">
            <NotFound />
          </Route>
          
     </Switch>
      </main>
    </>
  );
}

export default App;
