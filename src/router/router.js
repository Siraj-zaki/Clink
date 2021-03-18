import React from "react";
import Home from '../components/Home'
import { Route } from "react-router-dom";
import AboutUs from '../components/AboutUs'
import BlogPage from '../components/BlogPage'
import BlogDetail from '../components/BlogDetail'
import Products from '../components/Products'
import AddingToCart from '../components/AddingToCart'

class ReactRouter extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Route path="/Home" component={Home} />
        <Route exact path="/" component={Home} />
        <Route path="/BlogPage" component={BlogPage} />
        <Route path="/AboutUs" component={AboutUs} />
        <Route path="/BlogDetail" component={BlogDetail} />
        <Route path="/Products" component={Products} />
        <Route path="/AddingToCart" component={AddingToCart} />
      </React.Fragment>
    );
  }
}
export default ReactRouter;
