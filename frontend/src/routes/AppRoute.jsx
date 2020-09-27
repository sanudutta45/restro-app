import React from 'react';
import Scanner from "../Container/Scanner";
import Menu from "../Container/Menu/Index";
import PageNotFound from "./Page404";
import {BrowserRouter as Router,Redirect,Route,Switch} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/scanner" component={Scanner}/>
        <Route exact path="/restaurant/:id" component={Menu}/>

        <Route exact path="/" render={()=><Redirect to="/scanner"/>}/>

        <Route path="*" component={PageNotFound}/>

      </Switch>

    </Router>
  );
}

export default App;
