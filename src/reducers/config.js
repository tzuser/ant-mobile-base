import {SET_SELF} from '../actions/config';
const config=(state={show:true,selfUser:null,test:16},action)=>{
	switch(action.type){
    case SET_SELF:
      return Object.assign({},state,{selfUser:action.selfUser})
		default:
			return state
	}
}
export default config