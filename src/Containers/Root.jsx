import React, { Component } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import PageLoading from "com_/PageLoading";
import Footer from "com_/Footer";
import { withTheme } from "styled-components";

const Home = Loadable({
  loader: () => import("con_/Home.jsx"),
  loading: () => <div>加载中...</div>
});
const User = Loadable({
  loader: () => import("con_/User.jsx"),
  loading: () => <div>加载中...</div>
});
const Test = Loadable({
  loader: () => import("con_/Test.jsx"),
  loading: () => <div>加载中...</div>
});

@withTheme
class Root extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/user" component={User} />
          <Route path="/test" component={Test} />
        </Switch>
        <Footer />
      </div>
    );
  }
}
export default Root;
