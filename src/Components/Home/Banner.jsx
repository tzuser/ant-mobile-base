import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import {Carousel } from 'antd-mobile';
//import {getBanner} from 'act$/home';
@withRouter
class Banner extends Component{
  render(){
    let {location}=this.props;
    return  (
      <div style={{height:130}}>
        <Carousel
          autoplay={true}
          infinite
          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
          afterChange={index => console.log('slide to', index)}
        >
          <img
            src={`https://www.zk120.com/media/widgets/banners/2018/06/180315063355660.20180604080556122.png`}
            style={{ width: '100%',height:131, verticalAlign: 'top' }}
            />
          <img
            src={`https://www.zk120.com/media/widgets/banners/2018/06/180315063355660.20180604080556122.png`}
            style={{ width: '100%',height:130, verticalAlign: 'top' }}
            />
          <img
            src={`https://www.zk120.com/media/widgets/banners/2018/06/180315063355660.20180604080556122.png`}
            style={{ width: '100%',height:130, verticalAlign: 'top' }}
            />
        </Carousel>
      </div>
      )
  }
}
export default Banner