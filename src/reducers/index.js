import {combineReducers} from 'redux';
import {routerReducer} from 'react-router-redux';
import config from './config';

//逻辑复用
const createFilteredReducer=(reducerFunction,reducerPredicate)=>{
	return (state,action)=>{
		const isInitializationCall=state==undefined;
		const shouldRunWrappedReducer=reducerPredicate(action) || isInitializationCall;
		return shouldRunWrappedReducer ? reducerFunction(state,action):state;
	}
}

export default combineReducers({
	config:config,
  router:routerReducer
})