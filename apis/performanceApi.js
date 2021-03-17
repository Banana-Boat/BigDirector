import {baseURL,jsonAuthorizationHeaders} from '../config/config'

/**
 *  mengxun
 * 获取演出信息
 */

function GetPerformanceInfo(openId,performanceID){
  return new Promise((resolve,reject)=>{
    wx.request({
      url: baseURL + '/performance/info?performanceID='+performanceID,
      method:"GET",
      header:jsonAuthorizationHeaders(openId),
      success(res){
        resolve(res)
      },fail(err){
        console.log(err)
        reject("服务错误")
      }
    })
  })
}


/**
 * mengxun
 *创建或修改演出信息
 */

 function UpdatePerformanceInfo(openId,performanceInfo){
   return new Promise(function(resolve,reject){
    wx.request({
      url: baseURL + '/performance/info?openID='+openId,
      header:jsonAuthorizationHeaders(openId),
      method:"PUT",
      data:performanceInfo,
      success(res){
        resolve(res)
      },fail(err){
        console.log(err)
        reject("服务错误")
      }
     })
   })
 }

 module.exports = {
   GetPerformanceInfo,
   UpdatePerformanceInfo
 }