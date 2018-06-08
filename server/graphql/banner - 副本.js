import {get,BASE} from './public/request';

export const typeDefs=`
type Banner{
  # 图片地址
  url:String!
  # 标题
  title:String
  # 链接
  href:String
}
extend type Query{
  banner(
    # 城市 0表全部城市
    city_no:Int,
    # 平台 1<<0.H5,1<<1.微信,1<<2.PC官网,1<<3平安金管家,1<<4小程序
    platform:Int!
  ):[Banner]
}
`
export const resolvers={
  Query:{
    async banner(_,{city_no,platform},ctx){
      let res=await get(`${BASE}Interface/getbanner`,{city_no,platform});
      let list=res.data.map(item=>({
        url:item.img_url,
        title:item.alt,
        href:item.url
      }))
      return list
    },
  },
}