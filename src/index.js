//import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Loadable from 'react-loadable';
//import App from './Containers/App';
import {Provider} from 'react-redux';

import {getCreateStore} from './store'
import {ConnectedRouter} from 'react-router-redux';
import {Router} from 'react-router-dom';

import reducers from './reducers/index';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/lib/integration/react'

let {store,history}=getCreateStore(reducers);//获取store

let persistor = persistStore(store)

if(process.env.NODE_ENV=='development'){
	//热加载配置
	if(module.hot) {		
		module.hot.accept('./reducers/index.js', () => {
			const {default:nextRootReducer}=require("./reducers/index.js")
			store.replaceReducer(nextRootReducer);
		});
		module.hot.accept('./Containers/App.jsx', () => {
			render()
		});
	}
}

//是否是服务器渲染
const renderDOM=process.env.NODE_ENV=='production'?ReactDOM.hydrate:ReactDOM.render;
const render=()=>{
	const App = require("./Containers/App.jsx").default;
	renderDOM(
		<Provider store={store}>
			<PersistGate loading={null} persistor={persistor}>
					<ConnectedRouter history={history}>
						<App />
					</ConnectedRouter>
			</PersistGate>
		</Provider>
		,document.getElementById('root'))
}
//为了确保loadable加载完成
window.main = () => {
  Loadable.preloadReady().then(() => {
	render()
  });
};