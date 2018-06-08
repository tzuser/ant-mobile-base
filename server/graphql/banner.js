import {get,BASE} from './public/request';

export const typeDefs=`
type Banner{
  img_url:String!
  alt:String
  url:String
}
extend type Query{
  banner(city_no:Int, platform:Int!):[Banner]
}
`
export const resolvers={
  Query:{
    async banner(_,{city_no,platform},ctx){
      let res=await get(`${BASE}Interface/getbanner`,{city_no});
      return res.data
    },
  },
}