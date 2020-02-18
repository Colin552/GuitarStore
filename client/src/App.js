import React from 'react';
import './App.css';

import Home from './views/Home.js';
import About from './views/About.js';
import Contact from './views/Contact.js';
import ProductSearch from './views/ProductSearch.js';

import Product from './views/Product.js';
import Login from './views/Login.js';
import Navbar from './component/Navbar/Navbar.js';
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
              <Route path='/shop' exact>
                <ProductSearch />
              </Route>
              <Route path='/shop/electric'>
                <ProductSearch />
              </Route>
              <Route path='/shop/acoustic'>
                <ProductSearch />
              </Route> 
              <Route path='/shop/amplifiers'>
                <ProductSearch />
              </Route>
              <Route path='/shop/tools'>
                <ProductSearch />
              </Route>                           
              <Route path='/contact' exact>
                <Contact />
              </Route>
              <Route path='/about' exact>
                <About />
              </Route>
              <Route path='/login' exact>
                <Login />
              </Route>
              <Route path='/product' exact>
                <Product />
              </Route>

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
  }
`