import np from 'request-promise';
import APIError from './APIError';
//运营管理后台
export const BASE = "http://admin.360gst.com/";
export const PICHOST = "http://www.gstzy.cn/";
export const CODE="http://api-dev.gstzy.cn/";

export const get=async (uri,qs)=>{
  let data=await np({uri,qs,json:true});
  if(data.status!=0){
    throw new APIError(data.message,data.status);
  }
  return data
}