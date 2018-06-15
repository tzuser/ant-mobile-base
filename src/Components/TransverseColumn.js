/**
横向栏目组件
使用示范
import {TransverseColumn,TransverseItem} from '../TransverseColumn';
<TransverseColumn title="附近医馆" moreHref="#" moreText="更多 >">
        	<ShopItem>
        	...
        	</ShopItem>
</TransverseColumn>
**/
import React,{Component} from 'react';
import Column from './Column';
import styled from 'styled-components';

const TransverseList=styled.div`
	display:flex;
	overflow:hidden;
	overflow-x:auto;
	margin-top:${p=>'-'+p.theme['v-spacing-lg']};
	margin-bottom:-12px;
	margin-left:${p=>'-'+p.theme['h-spacing-lg']};
	margin-right:${p=>'-'+p.theme['h-spacing-lg']};
	-webkit-overflow-scrolling : touch;
	
	& div:first-child{
		margin-left:7px;
	}
`

export const TransverseItem=styled.div`
	position:relative;
	padding-top:${p=>p.theme['v-spacing-lg']};
	padding-bottom:12px;
	padding-left:${p=>p.theme['h-spacing-md']};
	padding-right:${p=>p.theme['h-spacing-md']};
	&::before{	
		content: '';
	    position: absolute;
	    background-color: #ddd;
	    display: block;
	    z-index: 1;
	    top: 0;
	    right: 0;
	    bottom: 0;
	    width: 1PX;
	    transform-origin: 50% 50%;
	    transform: scaleX(0.5);
	}
	&:active{
		background-color:${p=>p.theme['fill-tap']};
	}
`


export class TransverseColumn extends Component {
  render() {
  	let {children,...columnPorps}=this.props
    return (
      <Column {...columnPorps} >
        <TransverseList>
        	{children}
        </TransverseList>
      </Column>
    );
  }
}

