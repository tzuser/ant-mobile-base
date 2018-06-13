import React,{Component} from 'react';
import Page from '../Components/Page';
import HomeNav from '../Components/Home/HomeNav';
import LoadingComponent from '../Components/LoadingComponent';
import Banner from '../Components/Home/Banner';
import Vicinity from '../Components/Home/Vicinity';
import {SearchBar,List, Tag,WhiteSpace,Icon } from 'antd-mobile';
import styled from 'styled-components';
import Column from '../Components/Column';
//import loadableVisibility from 'react-loadable-visibility/loadable-components'

//const LoadableHomeNav = loadableVisibility(() => import(/* webpackChunkName: 'HomeNav' */ '../Components/HomeNav'), {
//  LoadingComponent: LoadingComponent,
//})
const PositionBtn=styled.div`
  color:${p=>p.theme["color-text-caption"]};
  font-size:14px;
  vertical-align:middle;
  & svg{
    margin-bottom:-2px;
  }
`

const Headline=styled.span`
  font-size:14px;
`;

const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component{
  render(){   
    return (
      <Page>
        <SearchBar placeholder="搜索" maxLength={50} showCancelButton 
        onClear={value => console.log(value, 'onClear')}
        onCancel={value=> console.log(value, 'onCancel')}
        cancelText={<PositionBtn>广州<Icon type="down" size={'xxs'} /></PositionBtn>}/>
        <Banner />
        <HomeNav />

        <List  className="my-list">
          <Item arrow="horizontal" platform="ios">
            <Headline>健康 <Tag small>头条</Tag> 日行一膳 | 春风十里不如你，喝了这款汤，健康又美丽</Headline>
          </Item>
        </List>

        <WhiteSpace />
        {/*附近医馆*/}
        <Vicinity />
        <WhiteSpace />
        <Column title="热门科室"></Column>

      </Page>
    );
  }
}

export default Home;