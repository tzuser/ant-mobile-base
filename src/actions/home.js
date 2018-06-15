import request from 'act_/http';
//import gql from 'graphql-tag';
export const query=`
	query($city_no:Int!){
		banner(city_no:$city_no){
		  title
		  url
		  href
		}
	}
`
export const getBanner=()=>async (dispatch,getState)=>{
	
	const variables={
		city_no:0
	}
	let data=await dispatch(request({query,variables}));
	console.log(data);
}