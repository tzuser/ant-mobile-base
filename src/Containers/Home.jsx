import React, { Component } from 'react';
import Page from 'com_/Page';
import HomeNav from '../Components/Home/HomeNav';
import LoadingComponent from '../Components/LoadingComponent';
import Banner from 'com_/Home/Banner';
import Vicinity from 'com_/Home/Vicinity';
import { SearchBar, List, Tag, WhiteSpace, Icon } from 'antd-mobile';
import styled from 'styled-components';
import HotSection from 'com_/Home/HotSection';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as homeAct from 'act_/home';
import { withTheme } from 'styled-components';
const Item = List.Item;

const PositionBtn = styled.div`
  color: ${p => p.theme['color-text-caption']};
  font-size: 14px;
  vertical-align: middle;
  & svg {
    margin-bottom: -2px;
  }
`;

const Headline = styled.span`
  font-size: 14px;
`;

const mapStateToProps = state => ({});
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);
@withTheme
@connect(
  mapStateToProps,
  mapDispatchToProps
)
class Home extends Component {
  render() {
    return (
      <Page>
        <SearchBar
          style={{ background: this.props.theme['fill-body'] }}
          placeholder="搜索"
          maxLength={50}
          showCancelButton
          onClear={value => console.log(value, 'onClear')}
          onCancel={value => this.props.showModalAct()}
          cancelText={
            <PositionBtn>
              广州
              <Icon type="down" size={'xxs'} />
            </PositionBtn>
          }
        />
        <Banner />
        <HomeNav />

        <List className="my-list">
          <Item arrow="horizontal" platform="ios">
            <Headline>
              健康 <Tag small>头条</Tag> 日行一膳 | 春风十里不如你，喝了这款汤，健康又美丽
            </Headline>
          </Item>
        </List>

        <WhiteSpace />
        {/*附近医馆*/}
        <Vicinity />
        <WhiteSpace />
        {/*热门科室*/}
        <HotSection />
        <WhiteSpace />
        {/*专家团队*/}
      </Page>
    );
  }
}

export default Home;
