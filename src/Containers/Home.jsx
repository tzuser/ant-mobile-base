import React,{Component} from 'react';
import Page from '../Components/Page';
import HomeNav from '../Components/HomeNav';
import Banner from '../Components/Banner';
import {SearchBar,List, Tag } from 'antd-mobile';
import styled from 'styled-components';

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
        cancelText="广州"/>
        <Banner />
        <HomeNav />

        <List  className="my-list">
          <Item arrow="horizontal" platform="ios">
            <Headline>健康 <Tag small>头条</Tag> 日行一膳 | 春风十里不如你，喝了这款汤，健康又美丽</Headline>
          </Item>
        </List>

      </Page>
    );
  }
}

export default Home;