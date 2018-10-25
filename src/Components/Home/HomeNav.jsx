import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'antd-mobile';
const NavBox=styled.div`
  background-color:#fff;
  padding-top:0 !important;
  padding-bottom:0 !important;
`
const ItemBox=styled.div`
  padding: 5px;
  padding-top:18px;
  //height:100%;
  box-sizing: border-box;
  img{
    width: 30px;
    height: 30px;
  }
`
const GridCom=styled(Grid)`
  background-color:red;
  .am-flexbox-item.am-grid-item{
    height:90px; 
  }
`
const data=[
{
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  title: `预约挂号`,
},
{
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  title: `智能导诊`,
},
{
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  title: `理疗预约`,
},
{
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  title: `0元抢号`,
}
]
class HomeNav extends Component{
  render(){
    let {location}=this.props;
    return  (
      <GridCom data={data}
            columnNum={4}
            hasLine={false}
            renderItem={dataItem => (
              <ItemBox>
                <img src={dataItem.icon} alt="" />
                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                  <span>{dataItem.title}</span>
                </div>
              </ItemBox>
            )}
          />
      )
  }
}
export default withRouter(HomeNav)
