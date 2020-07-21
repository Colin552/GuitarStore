import React from 'react';
import './App.css';

import Home from './views/Home.js';
import About from './views/About.js';
import Contact from './views/Contact.js';
import ProductSearch from './views/ProductSearch.js';
import Account from './views/Account.js';
import Admin from './views/Admin';
import FileModify from './views/FileModify';
import ShoppingCart from './views/ShoppingCart';
import Checkout from'./views/Checkout';

import Product from './views/Product.js';
import Login from './views/_Login'
import Navbar from './component/Navbar/_Navbar.js';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import styled from 'styled-components';


function App() {

  
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <BodyContainer>
            <ContentContainer>

              <Route path='/' exact>
                <Home />
              </Route>

              <Route path='/category/:category/:brand' component={ProductSearch} exact/>
              <Route path='/category/:category' component={ProductSearch} exact/>
              
              <Route path='/checkout' component={Checkout} exact/>

              <Route path='/contact' exact>
                <Contact />
              </Route>
              <Route path='/about' exact>
                <About />
              </Route>
              <Route path='/login' exact>
                <Login />
              </Route>
              <Route path='/product/:id' component={Product} exact />
              <Route path='/account' exact>
                <Account />
              </Route>
              <Route path='/admin' exact> <Admin /> </Route>              
              <Route path='/admin/:type' exact component={FileModify}/>
              <Route path='/cart' component={ShoppingCart} exact />
            </ContentContainer>
          </BodyContainer>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

const BodyContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1200px auto;
  @media only screen and (max-width: 1200px) {
        grid-template-columns: auto;
  }
`
const ContentContainer = styled.div`
  grid-column: 2;
  @media only screen and (max-width: 1200px){
    grid-column: 1;
    margin-left: 10px;
  }
`