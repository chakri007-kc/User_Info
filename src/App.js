import React from "react";
import { BrowserRouter as Router,Route } from "react-router-dom"
import "bootstrap/dist/css/bootstrap.min.css"

import Navbar from "./components/navbar.component"
import List from "./components/list.component"
import Add from "./components/add.component"

function App() {
  return (
    <Router>
        <div className="container">
        <Navbar />
        <br/>
        <Route path="/" exact component={List}/>
        <Route path="/adduser" exact component={Add}/> 
      </div>
    </Router>
  );
}

export default App;
