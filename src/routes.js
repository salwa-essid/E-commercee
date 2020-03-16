import React, { Component } from 'react';
import { Route } from 'react-router-dom'
import Home from "./home"
import Magazin from "./magazin"
class Routes extends Component {
    render() { 
        return (
            <div>
            <Route exact path="/" component={Home} /> 
            <Route exact path="/magazin" component={Magazin} />
            </div>
        );
    }
}
 
export default Routes;