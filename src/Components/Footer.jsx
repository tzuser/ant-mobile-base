import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import classNames from 'classnames'
import styled from 'styled-components';

import { TabBar } from 'antd-mobile';

const FooterBox=styled.div`
  position:fixed;
  bottom:0;
  left:0;
  right:0;
`

@withRouter
class Footer extends Component{
  state={active:null}
  data=[
  {title:'首页',icon:'icon-shouye',path:'/'},
  {title:'问诊',icon:'icon-shouye2',path:'/1'},
  {title:'消息',icon:'icon-shouye3',path:'/2',badge:3},
  {title:'我的',icon:'icon-shouye1',path:'/user'}
  ]
  to(path){
    let {location:{pathname},history:{push}}=this.props;
    this.setState({active: path});
    push(path);
  }
  componentWillMount(){
    let {location:{pathname}}=this.props;
    let selfName=null;
    let path;
    for(var [key,value] of Object.entries(this.data)){
      let item=value;
      if(this.state.active===null){
        if(selfName && pathname.startsWith(`/${selfName}`)){//用户处理
          path=item.path
        }else if(pathname.startsWith(item.path)){
          path=item.path
        }
      }
    }
    if(path)this.setState({active: path});
  }
  renderItem({title,icon,path,badge=0}){
    let {location:{pathname},show}=this.props;
    let active=this.state.active;
    return <TabBar.Item
              location={location}
              title={title}
              key={path}
              icon={<div className={classNames("icon",icon)} style={{fontSize:22,width: '22px',height: '22px'}}
              />
              }
              selectedIcon={<div className={classNames("icon",icon)} style={{fontSize:22,width: '22px',height: '22px'}}
              />
              }
              selected={this.state.active==path}
              badge={badge}
              onPress={() => {
                this.to(path)
              }}
              data-seed="logId"
            />
  }
  render(){
    let active=this.state.active;
    let {location,show}=this.props;
    return  (
      <div style={{height:49}}>
        <FooterBox>
          <TabBar
            unselectedTintColor="#949494"
            tintColor="#33A3F4"
            barTintColor="white"
            hidden={false}
          >
            {this.data.map(item=>this.renderItem(item)) }
          </TabBar>
        </FooterBox>
      </div>
      )
  }
}
export default Footer