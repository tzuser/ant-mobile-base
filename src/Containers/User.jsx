import React,{Component} from 'react';
import Page from '../Components/Page';
import { Button,Modal} from 'antd-mobile';
import { withTheme } from "styled-components";

@withTheme
class User extends Component{
  render(){   
    return (
      <Page>        
        <Button onClick={()=>{
        	Modal.alert('请求错误',"asdfasdf", [
        	    { text: 'OK', onPress: () => console.log('ok') },
        	 ]);
        }}>HTML5</Button>
      </Page>
    );
  }
}


export default User;