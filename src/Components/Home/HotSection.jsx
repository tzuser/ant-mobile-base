//首页-热门科室
import React,{Component} from 'react';
import Column from '../Column';
import {Flex,Button,WhiteSpace} from 'antd-mobile';
import styled from 'styled-components'
const Span=styled.div`
padding:3px;
`
class HotSection extends Component{
  render(){   
    return (
        <Column title="热门科室" moreHref="#">
			<Flex  >
				<Button style={{width: 1000}} size="small" >妇科</Button><Span />
				<Button style={{width: 1000}} size="small" >皮肤科</Button><Span/>
				<Button style={{width: 1000}} size="small" >中医内科</Button>
			</Flex>
			<WhiteSpace  />
			<Flex>
				<Button style={{width: 1000}} size="small" >儿科</Button><Span/>
				<Button style={{width: 1000}} size="small" >脾胃科</Button><Span/>
				<Button style={{width: 1000}} size="small" >针灸推拿科</Button>
			</Flex>
        </Column>
    );
  }
}

export default HotSection;