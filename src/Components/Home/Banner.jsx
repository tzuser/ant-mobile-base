import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import {Carousel } from 'antd-mobile';

const ImgHost="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/"

@withRouter
class Banner extends Component{
  render(){
    let {location}=this.props;
    const banner=[
    {title:"test",url:"banner/201810/19/5bc980453639f.jpg"},
    {title:"test2",url:"banner/201810/17/5bc6dd58042fd.jpg"},
    ];
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