import request from 'act_/http';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import Test from 'con_/Test'
//import gql from 'graphql-tag';
export const query=`
	query($city_no:Int!,$platform:Int!){
		banner(city_no:$city_no,platform:$platform){
		  title
		  url
		  href
		}
	}
`
export const getBanner=()=>async (dispatch,getState)=>{
	console.log('aaaaaaaaaaaaaaaaaaaaaa',ReactDOMServer.renderToString(<Test/>));
	const variables={
		city_no:0,
		platform:1,
	}
	let data=await dispatch(request({query,variables}));
	console.log(data);
}
