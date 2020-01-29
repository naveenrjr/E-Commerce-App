import React from 'react';
import './App.css';
import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop-page/shop-page.component';
import {Route,Switch} from 'react-router-dom';

function App() {

  const HatsPage=()=>{
    return(

      <h1>Hats Page</h1>
    )

    
  }
  return (
    <div className="container">
      <Switch>
      <Route path="/" exact component={HomePage}/>
      <Route path="/shop" exact component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
