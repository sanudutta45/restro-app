import React from 'react';
// import Scanner from "../Container/Scanner";
import Menu from "../Container/Menu/Menu";
import Header from "../Components/Header/Header"
import PageNotFound from "./Page404";
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";
import Home from '../Container/Home/Home';

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
      <Route exact path="/" component={Home}/>
      <Route path="/restaurant/:id" component={Menu}/>
        {/* <Route path="/scanner" component={Scanner}/> */}
        {/* <Route path="/restaurant/:id" component={Menu}/> */}

        <Route exact path="/" render={()=><Redirect to="/scanner"/>}/>

        <Route path="*" component={PageNotFound}/>

      </Switch>

    </Router>
  );
}

export default App;
