import React,{Component} from 'react';
import {withRouter,Link} from 'react-router-dom';
import classNames from 'classnames'
import styled from 'styled-components';
import { withTheme } from 'styled-components'
import { TabBar } from 'antd-mobile';
const navData=[
  {title:'首页',icon:'icon-shouye',path:'/'},
  {title:'问诊',icon:'icon-shouye2',path:'/1'},
  {title:'消息',icon:'icon-shouye3',path:'/2',badge:3},
  {title:'我的',icon:'icon-shouye1',path:'/user'}
  ]
const FooterBox=styled.div`
  position:fixed;
  bottom:0;
  left:0;
  right:0;
  z-index:2;
`
@withTheme
@withRouter
class Footer extends Component{
  state={active:null}
  to(path){
    let {location:{pathname},history:{push}}=this.props;
    this.setState({active: path});
    push(path);
  }

  static getDerivedStateFromProps(nextProps,prevState){
    let nextPathname=nextProps.location.pathname;
    let currentNav;
    if(nextPathname != prevState.active){
      for(var [key,value] of Object.entries(navData)){
        let item=value;
        if(nextPathname.startsWith(item.path)){
          currentNav=item
        }
      }
      if(currentNav)return {active:currentNav.path};
    }
    return null
  }

  renderItem({title,icon,path,badge=0}){
    let {location,show}=this.props;
    let {pathname}=location;
    let active=this.state.active;
    return <TabBar.Item
              location={location}
              title={title}
              key={path}
              icon={
                <div 
                className={classNames("icon",icon)} 
                style={{fontSize:22,width: '22px',height: '22px'}}
                />
              }
              selectedIcon={
                <div 
                className={classNames("icon",icon)} 
                style={{fontSize:22,width: '22px',height: '22px'}}
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
    let {location,show,theme}=this.props;
    return  (
      <div style={{height:49}}>
        <FooterBox>
          <TabBar
            unselectedTintColor={theme["color-text-caption"]}
            tintColor={theme["brand-primary"]}
            barTintColor={theme["fill-base"]}
            hidden={false}
          >
            {navData.map(item=>this.renderItem(item)) }
          </TabBar>
        </FooterBox>
      </div>
      )
  }
}
export default Footer