import React from 'react';
import Home from './components/HomePage/HomePage.js';
import Search from './components/SearchPage/SearchPage.js';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class App extends React.Component {

   render(){
      return(
         <Router>
            <div>
               <Switch>
                  <Route exact path="/" component={Home} />
                  <Route path="/search" component={Search} />
               </Switch>
            </div>
         </Router>
      )
   }
}

export default App;
