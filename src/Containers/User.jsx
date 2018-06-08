import React,{Component} from 'react';
import Page from '../Components/Page';
import HomeNav from '../Components/HomeNav';
import {Button} from 'antd-mobile';
class User extends Component{
  render(){   
    return (
      <Page>        
        <Button>HTML5</Button>
        <HomeNav />
      </Page>
    );
  }
}


export default User;