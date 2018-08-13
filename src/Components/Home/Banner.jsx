import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import {Carousel } from 'antd-mobile';
import {graphql} from 'react-apollo';
//import {getBanner} from 'act$/home';
import bannerQuery from 'gql_/banner.gql';

const ImgHost="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/"
@withRouter
@graphql(bannerQuery,
{options:(props)=>{
    return {
      variables:{
        city_no:0,
        platform:1,
      },
      errorPolicy:"ignore",
    }
  }
})
class Banner extends Component{
  render(){
    let {data:{banner,loading},location}=this.props;
    console.log(this.props)
    if(loading)return '加载中...';
    return  (
      <div style={{height:130}}>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          {banner.map((item,key)=>(
            <img
              key={key}
              src={ImgHost+item.url}
              title={item.title}
              style={{ width: '100%',height:131, verticalAlign: 'top' }}
              />
          ))}
          
         
        </Carousel>
      </div>
      )
  }
}
export default Banner