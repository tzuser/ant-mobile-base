import React, { PureComponent } from "react";
import { Route, withRouter, Switch } from "react-router-dom";
import Loadable from "react-loadable";
import styled, { ThemeProvider } from "styled-components";
import theme from "../public/theme";

const Root = Loadable({
  loader: () => import("con_/Root.jsx"),
  loading: () => <div>加载中...</div>
});
@withRouter
class App extends PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <Route path="/" component={Root} />
        </div>
      </ThemeProvider>
    );
  }
}
export default App;
