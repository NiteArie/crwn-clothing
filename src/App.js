import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import Header from './components/header/header.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-out-page/sign-in-and-sign-out.component';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" render={props => <HomePage {...props} />} />
        <Route path="/shop" render={props => <ShopPage {...props} />} />
        <Route path="/signin" render={props => <SignInAndSignUpPage {...props} />} />
      </Switch>
    </div>
  );
}

export default App;
