import React,{PureComponent} from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import PageLoading from '../Components/PageLoading';
import Footer from '../Components/Footer';
import path from 'path';


const LoadableHome = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './Home'),
  loading:PageLoading
});
const LoadableUser = Loadable({
  loader: () => import(/* webpackChunkName: 'User' */ './User'),
  loading:PageLoading
});

@withRouter
class App extends PureComponent{
	render(){
		return(
			<div >
        <Switch>
          <Route exact path="/" component={LoadableHome} />
          <Route path="/user" component={LoadableUser} />
        </Switch>
        <Footer />
			</div>
			)
	}
};
export default App;