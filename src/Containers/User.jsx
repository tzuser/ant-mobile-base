import React,{Component} from 'react';
import Page from '../Components/Page';
import {Button} from 'antd-mobile';
import { Modal} from 'antd-mobile';
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