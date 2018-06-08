import Router  from 'koa-router';
import graphqlHTTP from 'koa-graphql';
import formatError from './public/formatError';
import {makeExecutableSchema} from 'graphql-tools';
import * as banner from './banner';

const typeDefs=[`
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
router.all('/graphql', graphqlHTTP({
    schema: mySchema,
    graphiql: true,
    formatError,
}))
export default router