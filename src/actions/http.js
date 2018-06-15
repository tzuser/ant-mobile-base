import { createApolloFetch } from 'apollo-fetch';
//import { Modal} from 'antd-mobile';
import Instance from 'act_/Instance';

//初始化graphql请求
let apolloFetch=Instance.getMethod('fetch')
if(!apolloFetch){
	const uri= process.env.RUN_ENV=='server'?'http://localhost:8181/graphql':'/graphql';
	apolloFetch = createApolloFetch({ uri });
	Instance.addMethod(apolloFetch,'fetch');
}

function getGqlString(doc: DocumentNode) {
  return doc.loc && doc.loc.source.body;
}

const request=({query,variables})=>async (dispatch,getState)=>{
	if(typeof query=="object"){
		query=getGqlString(query);
	}

	const data=await apolloFetch({query,variables})
	if(data.errors){
		console.error(`请求错误：${data.errors[0].message}`)
	}
	return data
}
export default request