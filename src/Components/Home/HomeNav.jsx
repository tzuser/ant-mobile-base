import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import styled from 'styled-components';
import { Grid } from 'antd-mobile';
const NavBox=styled.div`
  background-color:#fff;
  padding-top:0 !important;
  padding-bottom:0 !important;
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
      <Grid data={data}
            columnNum={4}
            hasLine={false}
            renderItem={dataItem => (
              <div style={{ padding: '5px',paddingTop:'18px' }}>
                <img src={dataItem.icon} style={{ width: '30px', height: '30px' }} alt="" />
                <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
                  <span>{dataItem.title}</span>
                </div>
              </div>
            )}
          />
      )
  }
}
export default withRouter(HomeNav)
