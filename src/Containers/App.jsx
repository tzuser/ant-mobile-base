import React,{PureComponent} from 'react';
import {Route,withRouter,Switch} from 'react-router-dom';
import Loadable from 'react-loadable';
import styled,{ThemeProvider} from 'styled-components';
import theme from '../public/theme'

const LoadableRoot = Loadable({
  loader: () => import(/* webpackChunkName: 'Home' */ './Root'),
  loading:()=>'加载中...'
});

@withRouter
class App extends PureComponent{
  render(){
    return(
      <ThemeProvider theme={theme}>
          <Route  path="/" component={LoadableRoot} />
      </ThemeProvider>
      )
  }
};
export default App;