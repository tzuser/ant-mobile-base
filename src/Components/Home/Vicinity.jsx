//首页-附近医馆
import React,{Component} from 'react';
import {TransverseColumn,TransverseItem} from '../TransverseColumn';
import styled from 'styled-components';


const ShopItem=styled(TransverseItem)`
	& img{
		width:140px;
		height:100px;
		margin-bottom:2px;
	}
`
const PositionText=styled.div`
	font-size:${p=>p.theme['font-size-caption-sm']};
	color:${p=>p.theme['color-text-caption']};
`


class Vicinity extends Component {
  render() {
    return (
      <TransverseColumn title="附近医馆" moreHref="#" >
        	<ShopItem>
        		<img src="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/shop/201607/05/577b94f735ca6.jpg?x-oss-process=image/resize,m_lfit,h_285,w_200" />
        		<div>广州东湖</div>
        		<PositionText><i className="icon icon-shouye9"></i>1.3km</PositionText>
        	</ShopItem>
        	<ShopItem>
        		<img src="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/shop/201607/05/577b94f735ca6.jpg?x-oss-process=image/resize,m_lfit,h_285,w_200" />
        		<div>广州东湖</div>
        		<PositionText><i className="icon icon-shouye9"></i>1.3km</PositionText>
        	</ShopItem>
        	<ShopItem>
        		<img src="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/shop/201607/05/577b94f735ca6.jpg?x-oss-process=image/resize,m_lfit,h_285,w_200" />
        		<div>广州东湖</div>
        		<PositionText><i className="icon icon-shouye9"></i>1.3km</PositionText>
        	</ShopItem>
            <ShopItem>
                <img src="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/shop/201607/05/577b94f735ca6.jpg?x-oss-process=image/resize,m_lfit,h_285,w_200" />
                <div>广州东湖</div>
                <PositionText><i className="icon icon-shouye9"></i>1.3km</PositionText>
            </ShopItem>
            <ShopItem>
                <img src="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/shop/201607/05/577b94f735ca6.jpg?x-oss-process=image/resize,m_lfit,h_285,w_200" />
                <div>广州东湖</div>
                <PositionText><i className="icon icon-shouye9"></i>1.3km</PositionText>
            </ShopItem>
            <ShopItem>
                <img src="//admin-gstzy.oss-cn-shenzhen.aliyuncs.com/data/upload/shop/201607/05/577b94f735ca6.jpg?x-oss-process=image/resize,m_lfit,h_285,w_200" />
                <div>广州东湖</div>
                <PositionText><i className="icon icon-shouye9"></i>1.3km</PositionText>
            </ShopItem>
      </TransverseColumn>
    );
  }
}
export default Vicinity
