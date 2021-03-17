import {baseURL,jsonHeaders,jsonAuthorizationHeaders} from '../config/config'

/**
 * mengxun
 * 获取用户openid
 */
function GetOpenId(){

  return new Promise(function(resolve,reject){
    wx.login({
      success(res){
        const code = res.code
        wx.request({
          url: baseURL + '/user/openID?code='+code,
          header:jsonHeaders,
          method:'GET',
          success(res){
           resolve(res)
          },fail(){
            reject("服务错误")
          }
        })
      },fail(){
        reject("微信服务出现问题")
      }
    })
  })
}

/**
 * mengxun
 * 获取用户信息
 */

function GetUserInfo(openid){

  return new Promise(function(resolve,reject){
    
    wx.request({
      url: baseURL + '/user/info?openID='+ openid,
      header:jsonAuthorizationHeaders(openid),
      method:'GET',
      success(res){
        resolve(res)
      },fail(){
        reject("服务错误")
      }
    })
  })
}

/**
 * mengxun
 * 用户数据的更新
 */

function UpdateUserInfo(openId,userInfo){

  return new Promise(function(resolve,reject){

    wx.request({
      url: baseURL + '/user/info',
      method:'PUT',
      header:jsonAuthorizationHeaders(openId),
      data:userInfo,
      success(res){
        resolve(res)
      },fail(){
        reject("服务错误")
      }
    })

  })
}

/**
 * mengxun
 * 获取用户的所有演出
 */


 function GetUsersAllPerformance(openId){
   return new Promise((resolve,reject)=>{
     wx.request({
       url: baseURL +'/user/performances',
       header: jsonAuthorizationHeaders(openId),
       method:"GET",
       success(res){
         resolve(res)
       },fail(err){
         console.log(err)
         reject("服务出错")
       }
     })
   })
 }

module.exports = {
  GetOpenId,
  GetUserInfo,
  UpdateUserInfo,
  GetUsersAllPerformance
}