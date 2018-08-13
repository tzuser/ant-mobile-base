import Router  from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import formatError from './public/formatError';
import {makeExecutableSchema} from 'graphql-tools';
import * as banner from './banner';
//import * as user from './user';

import { graphqlKoa,graphiqlKoa } from 'apollo-server-koa';


const typeDefs=[`
  #图片
  type Image{
    url:String!
    title:String
    width:Int
    height:Int
  }
  #带链接的图片
  type AImage{
    href:String
    url:String!
    title:String
    width:Int
    height:Int
  }

  type Query {
    hello: String
  }
  type Mutation{
    hello: String
  }
  schema {
    query: Query
    mutation: Mutation
  }
`];

const resolvers=[{
  Query:{
    hello:()=>{
      return "hello world"
    }
  }
}];

const addSchema=(data)=>{
  typeDefs.push(data.typeDefs)
  resolvers.push(data.resolvers)
}

addSchema(banner);

const mySchema = makeExecutableSchema({typeDefs,resolvers})


//路由处理
const router = new Router();
router.all('/graphql', async (ctx, next) =>{
  await graphqlKoa({
    schema: mySchema,
    formatError,
    context:ctx
  })(ctx)
})
router.get('/graphiql', async (ctx, next) =>{
  graphiqlKoa({ endpointURL: '/graphql' })(ctx)
});
export default router