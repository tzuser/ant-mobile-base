import React,{PureComponent} from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoading from '../Components/PageLoading';
import Footer from '../Components/Footer';
import path from 'path';
import styled,{ThemeProvider} from 'styled-components';
import theme from '../public/theme'

const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './Home'),
  loading:PageLoading
});
const LoadableUser = Loadable({
  loader: () => import(/* webpackChunkName: 'User' */ './User'),
  loading:PageLoading
});
const LoadableUserTest = Loadable({
  loader: () => import(/* webpackChunkName: 'Test' */ './Test'),
  loading:PageLoading
});


@withRouter
class App extends PureComponent{
	render(){
		return(
			<ThemeProvider theme={theme}>
        <div>
          <Switch>
            <Route exact path="/" component={LoadableHome} />
            <Route path="/user" component={LoadableUser} />
            <Route path="/test" component={LoadableUserTest} />
          </Switch>
          <Footer />
        </div>
			</ThemeProvider>
			)
	}
};
export default App;