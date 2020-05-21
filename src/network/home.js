// home页面的数据请求封装
import {  
  request
} from 'network/request'

export function getDatas(){
 return request({
    url: '/home/multidata'
   })
  //.then(res=>{
    
  // }).catch(err=>{
  //   console.log(err);
  // })
  
}
export function getGoods(type,page){
  return request({
     url: '/home/data',
     params:{
       type,
       page
     }
    })
  }