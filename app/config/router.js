/**
 * Created by aviad on 5/2/2016.
 */
var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var hashHistory = ReactRouter.hashHistory;



var routes = (
    <Router history={hashHistory}>
        <Route path="/" component={Main}>
            <Route path="/home" component={Home}></Route>
        </Route>
    </Router>
);

module.exports=routes;