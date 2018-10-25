import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import {Carousel } from 'antd-mobile';
import changeSize from 'com_/ChangeSize';
const ImgHost="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/"
const getScreenSize=(width,height,sWidth,sHeight)=>{
  let scale=width/height;
  return {width:sWidth,height:sWidth/scale}
}

@withRouter
class Banner extends Component{
  render(){
    let {location,sHeight,sWidth}=this.props;
    const banner=[
    {title:"test",url:"banner/201810/19/5bc980453639f.jpg",width:1333,height:417},
    {title:"test2",url:"banner/201810/17/5bc6dd58042fd.jpg",width:1333,height:417},
    ];
    const {width,height}=getScreenSize(banner[0].width,banner[0].height,sWidth,sHeight)
    return  (
      <div style={{height:height}}>
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
              style={{ width: '100%',height:height, verticalAlign: 'top' }}
              />
          ))}
        </Carousel>
      </div>
      )
  }
}
export default changeSize(Banner)