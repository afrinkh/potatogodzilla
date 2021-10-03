import React from 'react'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Header from '../header';


function HeaderRoute() {
    return (
      <Router>
  
        <Header />
      </Router>
      
    );
  }
  
  export default HeaderRoute;