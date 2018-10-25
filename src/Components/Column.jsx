/**
栏目组件
**/
import React,{Component} from 'react';
import { Flex,Card, WhiteSpace } from 'antd-mobile';
import styled from 'styled-components';

const Title=styled.div`
  font-size:${p=>p.theme["font-size-base"]};
`
const More=styled.a`
  font-size:${p=>p.theme["font-size-base"]};
  color:${p=>p.theme["color-text-caption"]};
`
const TitleIcon=styled.div`
  background-color:${p=>p.theme["brand-primary"]};
  width:4px;
  height:${p=>p.theme["font-size-base"]};
  margin-right:${p=>p.theme["h-spacing-md"]};
`

class Column extends Component {
  render() {
    let {title,moreText="全部 >",moreHref,full=true}=this.props;
    return (
      <Card full={full}>
            <Card.Header
              title={<Title>{title}</Title>}
              thumb={<TitleIcon/>}
              extra={moreHref && <More href={moreHref}>{moreText}</More>}
            />
            <Card.Body>
              {this.props.children}
            </Card.Body>
      </Card>
    );
  }
}
export default Column
