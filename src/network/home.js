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